import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
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
            <button onClick={addThree}>+1</button>
        </div>
    )
}
