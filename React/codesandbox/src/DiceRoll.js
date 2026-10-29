import "./DiceRoll.css";
import Die from "./Die";

export default function DiceRoll() {
  return (
    <div className="DiceRoll">
      <h1>サイコロを振る</h1>
      <Die />
      <Die />
      <Die />
    </div>
  );
}
