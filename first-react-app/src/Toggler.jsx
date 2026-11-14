import './Toggler.css';
import { useState } from "react"

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);

    // 今のisHappyと反対の値にする
    const toggleIsHappy = () => setIsHappy(!isHappy)
    return (
        <p onClick={toggleIsHappy} className="Toggler">
        {isHappy ? "😆": "☹️"}
        </p>
    );
}
