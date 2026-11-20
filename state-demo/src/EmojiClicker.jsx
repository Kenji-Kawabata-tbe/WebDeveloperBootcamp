// v4をuuidという名前でインポート
import {v4 as uuid} from 'uuid';
import { useState } from "react";

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '☺️' }]);
    const addEmoji = () => {
        setEmojis((previousEmojis) => [
            ...previousEmojis,
            { id: uuid(), emoji: '☹️' },
        ]);
    };
    return (
        <div>
            {emojis.map((e) => (
                <span key={e.id} style={{ fontSize: '4rem' }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>絵文字を追加</button>
        </div>
    );
}

