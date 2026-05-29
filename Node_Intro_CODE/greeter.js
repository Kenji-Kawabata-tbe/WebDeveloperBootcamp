// argvの１つ目と２つ目は無視され、引数で指定した文字列がこんにちはの後に表示される
const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`こんにちは${arg}`);
}
// node greeter.js  Hoge Moge
