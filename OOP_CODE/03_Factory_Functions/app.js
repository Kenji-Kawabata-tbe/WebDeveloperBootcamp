//ファクトリー関数
//あんま使うことはない

function hex(r, g, b) {
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
	return `rgb(${r}, ${g}, ${b})`;
}

//rgbもhexも元々はパラメーターを必要としていたがオブジェクトにすることでthisでとれる
//ただ、makeColorのオブジェクトをsecondColorとかthirdColorみたいに
//複数作った場合にrgbとhexの関数もその分作成されてしまうのであまり効率的ではない
function makeColor(r, g, b) {
	const color = {};

	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const {r, g, b} = this;
		//console.log(this);
		return `rgb(${r}, ${g}, ${b})`;
	}
	color.hex = function() {
		const {r, g, b} = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
	return color;
}
const firstColor = makeColor(35, 255, 150);
firstColor.rgb()
firstColor.hex()
firstColor.r = 255
