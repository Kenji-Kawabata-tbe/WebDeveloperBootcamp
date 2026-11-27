// v4をuuidという名前でインポート
import {v4 as uuid} from 'uuid';
import { useState } from "react";

// 配列のパターン
function randomEmoji() {
    const choices = ['☹️', '☺️', '🌚', '🌝', '🌞', '🌜️'];
    return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
    // const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '☺️' }]);
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
    const addEmoji = () => {
        setEmojis((previousEmojis) => [
            ...previousEmojis,
            // { id: uuid(), emoji: '☹️' },
            { id: uuid(), emoji: randomEmoji() },
        ]);
    };

    const deleteEmoji = (id) => {
        // 指定された絵文字を削除する
        setEmojis((previousEmojis) => {
            return previousEmojis.filter((e) => e.id !== id);
        });
    };

    const makeEverythingHeart = () => {
        setEmojis((previousEmojis) => {
            return previousEmojis.map((e) => {
                return { ...e, emoji: '❤' };
            });
        });
    };

    return (
        <div>
            {emojis.map((e) => (
                // <span key={e.id} style={{ fontSize: '4rem' }}>{e.emoji}</span>
                <span key={e.id} style={{ fontSize: '4rem' }} onClick={() => deleteEmoji(e.id)}>
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>絵文字を追加</button>
            <button onClick={makeEverythingHeart}>すべてハートにする</button>
        </div>
    );
}

