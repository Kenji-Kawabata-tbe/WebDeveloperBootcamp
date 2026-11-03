export default function Slots({ val1, val2, val3 }) {
  const isWinner = val1 === val2 && val1 === val3;

  return (
    <div>
      <h1>
        {val1} {val2} {val3}
      </h1>
      <h2 style={{ color: isWinner ? 'green' : 'red' }}>
        {isWinner ? '勝ち！' : '負け...'}
      </h2>
      {isWinner && <h3>おめでとう！</h3>}
    </div>
  );
}
