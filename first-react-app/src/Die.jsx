export default function Die({numSides = 6 }) { //JavaScriptのパラメーターと同様にデフォルト値も設定できる
    const roll = Math.floor(Math.random() * numSides) + 1;
    return <p>{numSides}面ダイスの出目： {roll}</p>;
}
