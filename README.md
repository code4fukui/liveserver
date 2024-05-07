# liveserver
live update local web server "live-server" in Deno  
ファイル更新で自動的にブラウザを更新するローカル用ウェブサーバー「[live-server](https://github.com/tapio/live-server)」の[Deno](https://deno.land/)版  

## how to run （使い方）
```
$ deno run --allow-net --allow-read --allow-env https://taisukef.github.io/liveserver/liveserver.js
```
or
```
$ deno run -A https://taisukef.github.io/liveserver/liveserver.js
```

## how to install （インストールの仕方）
```
$ deno install --allow-net --allow-read --allow-env https://taisukef.github.io/liveserver/liveserver.js
```
you can use in any directory （どんなディレクトリでも簡単に実行できるようになる）
```
$ liveserver
```

uninstall
```
$ deno uninstall https://taisukef.github.io/liveserver/liveserver.js
```

## how to check （ネットやファイルアクセスをチェック）
```
$ deno run --prompt https://taisukef.github.io/liveserver/liveserver.js
```

## original （出典）
live-server  
https://github.com/tapio/live-server  
