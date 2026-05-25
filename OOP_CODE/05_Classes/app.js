//クラス関数
//プロトタイプやコンストラクタの糖衣構文

class Color {
    // このconstructorというのはインスタンスが作成される時に自動的に呼ばれる関数
    // やっていることは04_Constructor～のfunction Colorと同じ。明示的にColorと宣言はしない。
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    //メソッドの定義
    //この書き方でちゃんとColorのプロトタイプにメソッドが追加される 
    //innerRGB()はインナーメソッドとしてrgb()とrgba()の中で呼び出される
    innerRGB() {
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');

red.rgba();
white.rgba();
document.body.style.backgroundColor = red.rgb()
document.body.style.backgroundColor = white.rgba(0.5)
