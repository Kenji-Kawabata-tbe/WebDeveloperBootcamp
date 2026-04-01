//コンソールで実施する
let input = prompt('コマンドを入力してください(new, list, delete, auit)');
const todos = ['水やりをする', '掃除をする'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('******');
        console.log('******');
    }
    input = prompt('コマンドを入力してください(new, list, delete, auit)');
}
console.log('アプリを終了しました');
