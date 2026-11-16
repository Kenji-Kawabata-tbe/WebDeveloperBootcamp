import { useState } from "react"

function generateGameBoard() {
    // 複雑な処理
    console.log('初期のゲームボートを作成中...');
    return Array(5000);
}

export default function Dumbo() {
    // 初期値を関数で設定
    // このように初期化処理の関数を呼ぶようにすると場合、再描画の度に初期化処理も実行される
    // const initGameBoard = generateGameBoard();
    // const [board, setBoard] = useState(initGameBoard);
    //// const [board, setBoard] = useState(generateGameBoard());

    // その場合、初期化処理の関数そのものを渡すようにする
    const [board, setBoard] = useState(generateGameBoard);

    return <button onClick={() => setBoard(Math.random())}>Stateを更新</button>

}
