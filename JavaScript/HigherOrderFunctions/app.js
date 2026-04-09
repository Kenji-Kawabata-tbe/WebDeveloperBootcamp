//メソッドの中のthis
//同じオブジェクト内の他のプロパティを使い時に活用

const cat = {
    name: 'タマ',
    color: 'grey',
    breed: 'アメリカショートヘア',
    cry() {
        console.log('にゃー');
        console.log(this);
        console.log(`${this.name}がニャーと鳴きました`);
    }
}

cat.cry()
const cry2 = cat.cry
cry2()


const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount = this.eggCount + 1
        return 'EGG';
    }
}
hen.name // "Helen"
hen.eggCount // 0
hen.layAnEgg() // "EGG"
hen.layAnEgg() // "EGG"
hen.eggCount // 2
