import { useState } from 'react';
import { getRolls } from './utils';
import Dice from './Dice';
import Button from './Button';

function LuckyN({ title = '', numDice = 2, winCheck }) {
  const [dice, setDice] = useState(getRolls(numDice));

  const isWinner = winCheck(dice);

  const roll = () => setDice(getRolls(numDice));
  return (
    <main className="LuckyN">
      <h1>
        {title} {isWinner && '勝ち！'}
      </h1>
      <Dice dice={dice} />
      {/* <button onClick={roll}>もう一回振る</button> */}
      <Button label="もう一回振る" clickFunc={roll} />
    </main>
  );
}

export default LuckyN;
