import { CONTENT_TYPE } from "https://js.sabae.cc/CONTENT_TYPE.js";
import { parseURL } from "https://js.sabae.cc/parseURL.js";

const serveInjectedWeb = async (injecthtml, req, basedir) => {
  if (basedir == null) {
    basedir = "docs";
  }
  //console.log(req)
  let url = req.url;
  const purl = parseURL(url);
  let path = purl.path;
  const nq = url.indexOf("?");
  if (nq >= 0) {
    url = url.substring(0, nq);
  }
  url = decodeURI(url);
  if (url === "/favicon.ico") {
    req.respond({ body: "" });
    return;
  }
  if (path.endsWith("/")) {
    path += "index.html";
  }
  if (basedir.endsWith("/")) {
    basedir = basedir.substring(0, basedir.length - 1);
  }
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Accept"); // must
  //headers.set("Cross-Origin-Embedder-Policy", "require-corp"); // for SharedArrayBuffer
  //headers.set("Cross-Origin-Opener-Policy", "same-origin"); // for SharedArrayBuffer
  const n = path.lastIndexOf(".");
  console.log(path);
  if (path.indexOf("..") === -1 && n >= 0) {
    const ext = path.substring(n + 1);
    const fpath = basedir + path;
    try {
      headers.set("Content-Type", CONTENT_TYPE[ext] || "text/plain");
      if (fpath.endsWith(".html")) {
        const body = await Deno.readTextFile(fpath) + injecthtml;
        //console.log(body)
        if (body) {
          //req.respond({ body, headers });
          const bin = new TextEncoder().encode(body);
          headers.set("Content-Length", bin.length);
          return new Response(bin, {
            //status: range ? 206 : 200,
            status: 200,
            headers,
          });
        }
      } else {
        const body = await Deno.readFile(fpath);
        if (body) {
          return new Response(new Uint8Array(body), {
            status: 200,
            headers,
          });
        }
      }
    } catch (e) {
      //console.log(e);
      headers.set("Content-Type", "text/html");
//      req.respond({ body: 'error', headers });
      return new Response("error", {
        status: 404,
        headers,
      });
    }
  }
  //req.respond({ body: "", headers });
  return new Response(new Uint8Array(0), {
    status: 404,
    headers,
  });
};

export { serveInjectedWeb };
