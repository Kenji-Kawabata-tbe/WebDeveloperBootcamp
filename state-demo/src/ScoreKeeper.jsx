import { useState } from "react";

export function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
    function increaseP1Score() {
        // これだとp1Scoreは更新しているがscores自体は変わっていないのでsetScoresしても表示される値は変わらない
        // scores.p1Score += 1;
        // console.log(scores);
        // setScores(scores);
     
        // その場合、スプレッド構文で新規で作成したオブジェクトをセットする
        //const newScores = {...scores, p1Score: scores.p1Score + 1 };
        //setScores(newScores);
        setScores((previousScores) => {
            return {...previousScores, p1Score: scores.p1Score + 1 };
        });
    }
    function increaseP2Score() {
        setScores((previousScores) => {
            return {...previousScores, p2Score: scores.p2Score + 1 };
        });
    }
    return (
        <div>
            <p>プレイヤー1: {scores.p1Score}</p>
            <p>プレイヤー2: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 プレイヤー1</button>
            <button onClick={increaseP2Score}>+1 プレイヤー2</button>
        </div>
    );
}

export default ScoreKeeper;
