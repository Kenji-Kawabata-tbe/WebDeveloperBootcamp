import "./styles.css";
import Greeter from "./Greeter";
import Dog from "./Dog";
import LoginForm from "./LoginForm";
import Die from "./Die";
import DiceRoll from "./DiceRoll";
import RandomPokemon from "./RandomPokomeon";

//function Dog() {
//  return <p>わん!!!</p>;
//}

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      {/* <Greeter />
      <Dog />
      <LoginForm /> */}
      <Die />
      <DiceRoll />
      <DiceRoll />
      <RandomPokemon />
      <RandomPokemon />
      <RandomPokemon />
    </div>
  );
}
