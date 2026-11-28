import Box from './Box';
import BoxGrid from './BoxGrid';
// import LuckyN from './LuckyN';
// import { sum } from './utils';

// function lessThan4(dice) {
//   return sum(dice) < 4;
// }

// function allSameValue(dice) {
//   return dice.every((v) => v === dice[0]);
// }

function App() {
  return (
    <>
      <BoxGrid />
      {/* <LuckyN title="４より小さくしよう" numDice={2} winCheck={lessThan4} />
      <LuckyN title="全部同じ値にしよう" numDice={2} winCheck={allSameValue} /> */}
    </>
  );
}

export default App;
