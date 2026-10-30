import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter';

function App() {

  return (
    <div>
      <Chicken />
      <Chicken />
      <Chicken />
      <Greeter />
      <Greeter person="太郎" />
      <Greeter person="次郎" />
      <Greeter person="三郎" />
    </div>
  );
}

export default App
