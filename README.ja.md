# liveserver

Deno でファイル更新時にブラウザを自動的に更新するローカルウェブサーバー「live-server」の実装です。

## 機能

- ファイル更新時に自動でブラウザを更新
- CSS の更新時には、スタイルだけ再設定

## 使い方

```sh
$ deno run --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js
```
→ http://localhost/ を開く

または任意のポート番号を指定できます。
```sh
$ deno run --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js 8888
```

## インストール

```sh
$ deno install -g --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js
```
すると、どのディレクトリからでも `liveserver` コマンドが使えるようになります。

## ライセンス

MIT License