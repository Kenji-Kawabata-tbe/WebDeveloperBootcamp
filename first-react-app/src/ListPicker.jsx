export default function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.length);
    const randElement = values[randIdx];
    return (
        <div>
            <p>値の一覧： {values}</p>
            <p>選択された要素は： {randElement}</p>
        </div>
    );
}
