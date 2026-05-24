//コンストラクタ関数
//JavaScriptのコンストラクタ関数は他の言語のコンストラクタとはやや特徴が異なる

//コンストラクタ関数の場合は戦闘を大文字にするのが慣習
function Color(r, g, b) {
	//これが暗黙的に入ってる感じ
	//this = {};
	this.r = r;
	this.g = g;
	this.b = b;
	//これが暗黙的に入ってる感じ
	//return this;
}
//new Color(255, ,0 ,0);

//Colorのprototypeにメソッドを追加することで配列やStringと同じように
//prototype経由でメソッドを使う事ができる
//ファクトリー関数みたいにそれぞれのオブジェクトの同じメソッドを定義する必要がなくなる。
Color.prototype.rgb = function () {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
}

//デフォルトはaは1.0
Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
}

Color.prototype.hex = function () {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// new 演算子
// 1. 空白のプレーンな JavaScript オブジェクトを作成します。
// 2. 他のオブジェクトを親プロトタイプとすることで、新しく作成されたオブジェクトと他のオブジェクトをリンク（コンストラクターを設定）します。
//     ->新しいオブジェクトのプロトタイプにcolor(この場合の例)のプロトタイプを関連付けている
// 3. ステップ 1 で新しく作成されたオブジェクトを this コンテキストとして渡します。
// 4. 関数がオブジェクトを返さない場合(returnが無い場合)は this を返します。
const color1 = new Color(40, 255, 60);
//実際に適用
//document.body.style.backgroundColor = color1.rgb()
//document.body.style.backgroundColor = color1.rgba(0.5)
const color2 = new Color(0, 0, 0);
