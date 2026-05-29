console.log('argsからこんにちは！');
// argv
// 引数が無ければnodeがどこにあるか、渡したファイルのパスだけが表示される
// node args.js hoge moge
// とすると上記にプラスしてhoge,mogeも表示される
console.log(process.argv);
