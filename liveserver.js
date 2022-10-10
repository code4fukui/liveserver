import { serveInjectedWeb } from "./injectwebserver.js";

const defaultport = parseInt(Deno.args[0] || "8080");

const injecthtml = `<!-- Code injected by liveserver -->
<script type="module">
(() => {
  const refreshCSS = () => {
    const sheets = [].slice.call(document.getElementsByTagName("link"));
    const head = document.getElementsByTagName("head")[0];
    for (let i = 0; i < sheets.length; i++) {
      const elem = sheets[i];
      head.removeChild(elem);
      const rel = elem.rel;
      if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
        const url = elem.href.replace(/(&|\\?)_cacheOverride=\\d+/, "");
        elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
      }
      head.appendChild(elem);
    }
  };
  const protocol = window.location.protocol === "http:" ? "ws://" : "wss://";
  const address = protocol + window.location.host + "/ws";
  const socket = new WebSocket(address);
  socket.onmessage = (msg) => {
    if (msg.data == 'reload') {
      window.location.reload();
    } else if (msg.data == 'refreshcss') {
      refreshCSS();
    }
  };
  console.log('Live reload enabled.');
})();
</script>
`;

class LiveServer {
  constructor() {
    this.cons = [];
  }

  async checkFreePort(port) {
    try {
      const res = await (await fetch("http://localhost:" + port + "/")).text();
      //console.log(res);
      return false;
    } catch (e) {
      //console.log(e);
    }
    return true;
  }
  async serve () {
    const handler = async (req, conn) => {
      try {
        if (req.method === "GET" && req.url.endsWith("/ws")) {
          const { socket, response } = Deno.upgradeWebSocket(req);
          await this.accept(socket)
          return response;

        /*
          //Deno.upgradeWebSocket()
          if (acceptable(req)) {
            const wsreq = {
              conn: req.conn,
              bufReader: req.r,
              bufWriter: req.w,
              headers: req.headers
            }
            const wsock = await acceptWebSocket(wsreq)
            await this.accept(wsock)
          }
          */
        } else {
          return serveInjectedWeb(injecthtml, req, "./");
        }
      } catch (e) {
        console.log(e);
        console.log("in handler", e);
      }
    };
    let port = defaultport;
    for (;;) {
      if (await this.checkFreePort(port)) {
        const hostname = "[::]"; // for IPv6
        const addr = hostname + ":" + port;
        console.log(`http://${addr}/`);
        Deno.serve(handler, { hostname, port });
        break;
      }
      //port = 3000 + Math.floor(Math.random() * (10000 - 3000));
      port++;
    }
  }

  async accept (ws) {
    this.cons.push(ws);
  }

  async send(s) {
    try {
      for (const ws of this.cons) {
        try {
          console.log("send " + s);
          await ws.send(s);
        } catch (e) {
          //this.cons.remove(ws);
        }
      }
    } catch (e) {
    }
  }
}

const lives = new LiveServer();
lives.serve();

const watcher = Deno.watchFs("./");
for await (const e of watcher) {
  let allcss = true;
  for (const p of e.paths) {
    if (!p.endsWith(".css")) {
      allcss = false;
    }
  }
  if (allcss) {
    console.log("refreshcss");
    lives.send("refreshcss");
  } else {
    console.log("reload");
    lives.send("reload");
  }
}
