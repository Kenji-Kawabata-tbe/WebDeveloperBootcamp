export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2;
    const styles = { color: isWinner ? 'green' : 'red', fontSize: '20px'};

    // 勝った時だけ勝ち!を表示。色とフォントを指定
    return (
        <div className="DoubleDice" style={styles}>
            <h2>ダブルダイス</h2>
            {isWinner && <h3>'勝ち！'</h3>}
            <p>1つ目の出目： {num1}</p>
            <p>2つ目の出目： {num2}</p>
        </div>
    )


    // 勝った時だけ勝ち!を表示
    // return (
        // <div>
            {/* <h2>ダブルダイス</h2> */}
            {/* {num1 === num2 ? <h3>'勝ち！'</h3> : null} */}
            {/* {num1 === num2 && <h3>'勝ち！'</h3>} */}
            {/* <p>1つ目の出目： {num1}</p> */}
            {/* <p>2つ目の出目： {num2}</p> */}
        {/* </div> */}
    // )
}



// 2つサイコロの出目が同じなら勝ち、違う場合は負け
// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;

//     //const result = num1 === num2 ? '勝ち！' : '負け...';
//     return (
//         <div>
//             {/* <h2>{result}</h2> */}
//             <h2>{num1 === num2 ? '勝ち！' : '負け...'}</h2>
//             <p>1つ目の出目：　{num1}</p>
//             <p>2つ目の出目：　{num2}</p>
//         </div>
//     )
// }
