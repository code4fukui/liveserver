# liveserver
live update local web server "live-server" in Deno  
ファイル更新で自動的にブラウザを更新するローカル用ウェブサーバー「live-server」の[Deno](https://deno.land/)版  

## how to run （使い方）
```
$ deno run --allow-net --allow-read https://js.sabae.cc/liveserver.js
```
or
```
$ deno run -A https://js.sabae.cc/liveserver.js
```

## how to install （インストールの仕方）
```
$ deno install --allow-net --allow-read https://js.sabae.cc/liveserver.js
```
you can use in any directory （どんなディレクトリでも簡単に実行できるようになる）
```
$ liveserver
```

## how to check （ネットやファイルアクセスをチェック）
```
$ deno run --prompt --unstable https://js.sabae.cc/liveserver.js
```

## original （出展）
live-server  
https://github.com/tapio/live-server  
