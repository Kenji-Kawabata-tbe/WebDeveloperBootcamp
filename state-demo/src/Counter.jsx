import { useState } from "react"

export default function Counter() {
    console.log('描画しました')
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    };
    //　Reactは無駄な処理は極力行わないように最適化されているので
    // 処理は連続でボタンを押しても最初の一回しか実行されない
    const setToTen = () => {
        setCount(10);
    };


    const addThree = () => {
        // この場合、countに3足されない。
        // stateは再描画されないと更新されないので全部0 + 1になる。
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // その場合、関数にして第1引数にreactが管理している最新の値を使うようにできる
        // 新しい状態が前の状態に依存する場合はこれがベストプラクティス。
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);

    };
    
    return (
        <div>
            <p>値: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>10に設定</button>
        </div>
    )
}
