//props どっちの書き方でもOK
//export default function Greeter(props) {
//    return <h1>こんにちは、{props.person}!!!</h1>
//}
//export default function Greeter({ person }) {
//    return <h1>こんにちは、{person}!!!</h1>
//}

export default function Greeter({ person = "みなさん", from = "匿名" }) {
    return (
        <>
            <h1>こんにちは、{person}!!!</h1>
            <h1>-{from}</h1>
        </>
    );
}
