function handleClick() {
    console.log('クリックされた！！')
}

function handleMouseOver() {
    console.log('マウスオーバー！！')
}

export default function Clicker() {
    return (
        <div>
            {/* Reactではイベントが起きた時に実行したい処理をJSX上(コンポーネント)に直接記載する */}
            <p onMouseOver={handleMouseOver}>ホバーして</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
