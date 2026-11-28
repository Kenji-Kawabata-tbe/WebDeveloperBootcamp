import './Lucky7.css';
import { useState } from 'react';
import { getRolls, sum } from './utils';

function Lucky7() {
  const [dice, setDice] = useState(getRolls(2));
  const won = sum(dice) === 7;

  function roll() {
    setDice(getRolls(2));
  }

  return (
    <main className="Lucky7">
      <h1>Lucky7 {won && '勝ち！'}</h1>
      <section className="Lucky7-dice">
        <div className="Lucky7-die">{dice[0]}</div>
        <div className="Lucky7-die">{dice[1]}</div>
      </section>
      <button onClick={roll}>もう一回振る</button>
    </main>
  );
}

export default Lucky7;
