import './App.css';
import ScoreKeeper from './ScoreKeeper';

function App() {
  return (
    <div>
      <ScoreKeeper numPlayers={10} target={3} />
    </div>
  );
}

export default App;
