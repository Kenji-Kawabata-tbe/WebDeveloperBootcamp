export default function ColorList({ colors }) {
    //const lis = colors.map((color) => <li>{color}</li>);
    return (
        <div>
            <p>色の一覧</p>
            <ul>
                {colors.map((color) => (
                    <li style={{ color }}>{color}</li>
                ))}
            </ul>
        </div>
    );
}
