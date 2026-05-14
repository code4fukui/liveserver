# liveserver

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple, Deno-based live-reloading web server for local development.

## Features

-   **Live Reload:** Automatically reloads the browser when any file in the current directory is changed.
-   **CSS Hot-Reload:** Injects CSS changes without a full page refresh for a smoother development experience.
-   **Automatic Port Finding:** If the default port (80) or a specified port is in use, it automatically finds the next available port.
-   **Zero-Configuration:** Serves the current directory out of the box.
-   **Deno-Powered:** Runs on the [Deno](https://deno.land/) runtime.

## Requirements

-   [Deno](https://deno.land/) runtime

## Usage

`liveserver` serves files from the directory it's run in.

### Option 1: Run Directly from URL

This is the quickest way to use `liveserver` without installing it.

```sh
deno run --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js
```

Then open `http://localhost/` in your browser. By default, it uses port 80. If port 80 is unavailable, it will try port 8000, then 8001, and so on.

To specify a starting port:

```sh
deno run --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js 8888
```

### Option 2: Install as a Command

Install the script as an executable to run `liveserver` from any directory.

**1. Install the command:**

```sh
deno install -g --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js
```

*Tip: To update to the latest version, run the same command with the `-f` (force) flag.*

**2. Run the server:**

```sh
liveserver
```

Or with a specific port:

```sh
liveserver 8888
```

## Uninstall

To remove the installed `liveserver` command:

```sh
deno uninstall -g liveserver
```

## License

MIT License — see [LICENSE](LICENSE).