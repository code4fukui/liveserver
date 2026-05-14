# liveserver

ローカル開発向けの、Denoベースのシンプルなライブリロード対応Webサーバーです。

## 機能

-   **ライブリロード:** カレントディレクトリ内のファイルが変更されると、自動的にブラウザをリロードします。
-   **CSSホットリロード:** ページ全体をリロードすることなくCSSの変更を反映し、よりスムーズな開発体験を提供します。
-   **ポートの自動検索:** デフォルトのポート（80）または指定したポートが使用中の場合、利用可能な次のポートを自動的に探します。
-   **設定不要 (Zero-Configuration):** 設定なしで、すぐにカレントディレクトリのファイルを提供します。
-   **Denoベース:** [Deno](https://deno.land/) ランタイム上で動作します。

## 必要条件

-   [Deno](https://deno.land/) ランタイム

## 使い方

`liveserver` は、実行されたディレクトリ内のファイルを提供します。

### 方法1: URLから直接実行する

インストールせずに `liveserver` を使用する最も手軽な方法です。

```sh
deno run --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js
```

その後、ブラウザで `http://localhost/` を開きます。デフォルトではポート80を使用します。ポート80が利用できない場合は、ポート8000、8001と順番に試行します。

開始ポートを指定する場合:

```sh
deno run --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js 8888
```

### 方法2: コマンドとしてインストールする

任意のディレクトリから `liveserver` を実行できるように、スクリプトをコマンドとしてインストールします。

**1. コマンドのインストール:**

```sh
deno install -g --allow-env --allow-read --allow-net https://js.sabae.cc/liveserver.js
```

*ヒント: 最新バージョンにアップデートするには、同じコマンドに `-f` (force) フラグを付けて実行します。*

**2. サーバーの実行:**

```sh
liveserver
```

特定のポートを指定する場合:

```sh
liveserver 8888
```

## アンインストール

インストールした `liveserver` コマンドを削除するには:

```sh
deno uninstall -g liveserver
```

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
