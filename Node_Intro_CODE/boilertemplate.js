//require モジュールを読み込む設定
const fs = require('fs');

//fs.mkdirは非同期だからmkdirを待たずに一番最後のconsole.logが実行される
//fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
//    console.log('コールバックの中')
//    if (err) throw err;
//});
//console.log('ファイルの一番下')

// 引数が無ければデフォルトでProject
const dirName = process.argv[2] || 'Project';

//fs.mkdirSyncは同期処理
//fs.mkdirSync('Cats');
try {
    fs.mkdirSync(dirName);
    fs.writeFileSync(`${dirName}/index.html`, '');
    fs.writeFileSync(`${dirName}/app.js`, '');
    fs.writeFileSync(`${dirName}/styles.css`, '');
} catch(e) {
    console.log('問題が発生しました');
    console.log(e);
}


