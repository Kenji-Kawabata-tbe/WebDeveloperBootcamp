export default function Heading({color = 'olive', text, fontSize }) {
    // return <h1 style={{ color: color }}>{text}</h1>
    // 上記の省略形
    return <h1 style={{ color, fontSize }}>{text}</h1>
}
