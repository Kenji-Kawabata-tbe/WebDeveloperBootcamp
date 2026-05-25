//継承

class Pet {
	constructor(name, age) {
		console.log('Petコンストラクタ');
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name}がご飯を食べている`;
	}
}

// extends 
// CatはPetを継承しているのでPetのコンストラクタ関数が利用できる
class Cat extends Pet {
	constructor(name, age, jumpHeight = 5) {
		console.log('Catコンストラクタ');
		//superを使うことで親クラスのコンストラクタを呼びつつ自分独自のロジックを設定することができる
		//こうしないとjumpHeightのように新しくコンストラクタに値を追加する際に
		//constructor(name, age, jumpHeight = 5) {
		//	this.name= name;
		//	this.age =age;
		//	this.jumpHeight = jumpHeight;
		//}
		//みたいに親クラスのコンストラクタを使いたい場合でも同じように宣言しないといけなくなる
		super(name, age);
		this.jumpHeight = jumpHeight;
	}
	meow() {
		return 'にゃー！！！';
	}
}

class Dog extends Pet {
	bark() {
		return 'ワンワン！！！';
	}
	//継承しているコンストラクタ関数と同じ関数を定義すると、自身の関数が優先される
	eat() {
		return `${this.name}がご飯を食い散らかしている`;
	}
}

const pochi = new Dog('ポチ', 10);
pochi.eat();
