# liveserver

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A live-update local web server "live-server" in Deno.

## Features
- Automatically refreshes the browser when files are updated
- Works with Deno

## Requirements
- [Deno](https://deno.land/) runtime

## Usage

### Run
```sh
$ deno run --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js
```
Then open `http://localhost/`

You can also specify a port number:
```sh
$ deno run --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js 8888
```

### Install
```sh
$ deno install -g --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js
```
This will allow you to run `liveserver` from any directory.

### Uninstall
```sh
$ deno uninstall -g liveserver
```

## License
MIT License — see [LICENSE](LICENSE).