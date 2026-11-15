// このようにしてクリックしても値は変更しない。
// 関数内のnum自体は変わるけどこの関数がもう一回走るようにしないといけない
// 再描画するってことがReactは分からない
// export default function Counter() {
//     let num = 0;
//     const incrementNum = () => (num += 1);
//     return <div>
//         <p>現在の値は：{num}</p>
//         <button onClick={incrementNum}>増やす</button>
//     </div>
// }

import { useState } from "react";

export default function Counter() {
  // Stateの使い方
  // useStateフックを使ってsteteを作成する。useStateはReactが用意しているフックの一つ。
  //   2つの要素を持つ配列を返す
  //   この場合
  //   num stateの値そのもの
  //   setNum stateを変更する関数
  //   初期値は5。一回目しか使われず、それ以降は更新された状態でReactが実行してくれる。
  // useStateはコンポーネントの内部で呼び出す必要がある
  const [num, setNum] = useState(5);

  const changeNum = () => {
    // numを10に変更
    // setNum(10);
    // numを1ずつ増やす
    setNum(num + 1);
    // これは初回は5のまま。再描画や再実行された時に新しいstateが反映されるので
    // 以降もstateに反映される前の値が出力される
    console.log(`num: ${num}`);
  };

  return (
    <div>
      <p>現在の値は：{num}</p>
      <button onClick={changeNum}>増やす</button>
    </div>
  );
}
