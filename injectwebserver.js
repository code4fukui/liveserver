import { CONTENT_TYPE } from "https://js.sabae.cc/CONTENT_TYPE.js";

const serveInjectedWeb = (injecthtml, req, basedir) => {
  if (basedir == null) {
    basedir = "docs";
  }
  let url = req.url;
  const nq = url.indexOf("?");
  if (nq >= 0) {
    url = url.substring(0, nq);
  }
  url = decodeURI(url);
  if (url === "/favicon.ico") {
    req.respond({ body: "" });
    return;
  }
  if (url.endsWith("/")) {
    url += "index.html";
  }
  if (basedir.endsWith("/")) {
    basedir = basedir.substring(0, basedir.length - 1);
  }
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Accept"); // must
  headers.set("Cross-Origin-Embedder-Policy", "require-corp"); // for SharedArrayBuffer
  headers.set("Cross-Origin-Opener-Policy", "same-origin"); // for SharedArrayBuffer
  const n = url.lastIndexOf(".");
  console.log(url);
  if (url.indexOf("..") === -1 && n >= 0) {
    const ext = url.substring(n + 1);
    const path = basedir + url;
    try {
      headers.set("Content-Type", CONTENT_TYPE[ext] || "text/plain");
      if (path.endsWith(".html")) {
        const body = Deno.readTextFileSync(path) + injecthtml;
        if (body) {
          req.respond({ body, headers });
          return;
        }
      } else {
        const body = Deno.readFileSync(path);
        if (body) {
          req.respond({ body, headers });
          return;
        }
      }
    } catch (e) {
      headers.set("Content-Type", "text/html");
      req.respond({ body: 'error', headers });
      return;
    }
  }
  req.respond({ body: "", headers });
};

export { serveInjectedWeb };
