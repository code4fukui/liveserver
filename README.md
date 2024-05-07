# liveserver

- live update local web server "live-server" in Deno
- ファイル更新で自動的にブラウザを更新するローカル用ウェブサーバー「[live-server](https://github.com/tapio/live-server)」の[Deno](https://deno.land/)版

## how to run （使い方）

```sh
$ deno run -A https://js.sabae.cc/liveserver.js
```
with port
```sh
$ deno run -A https://js.sabae.cc/liveserver.js 8888
```

## how to install （インストールの仕方）

```sh
$ deno install -g --allow-net --allow-read https://js.sabae.cc/liveserver.js
```
you can use in any directory （どんなディレクトリでも簡単に実行できるようになる）
```sh
$ liveserver
```

## how to use （使い方）

- exec liveserver （liveserverを起動）
- open index.html on your browser （index.htmlをブラウザで開く）
- edit index.html → refresh the page! （index.htmlを編集すると自動的に再読み込みされる!）
- edit style.css → refresh the style on the page! （style.cssを編集するスタイルだけ自動的に再設定される!）

## how to uninstall （アンインストールの仕方）

```sh
$ deno uninstall -g liveserver
```

## original （出典）

- [live-server](https://github.com/tapio/live-server)
