import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'

function App() {

  return (
    <div>
      <Chicken />
      <Chicken />
      <Chicken />
      <Greeter />
      <Greeter person="太郎" from="田中" />
      <Greeter person="次郎" from="田中" />
      <Greeter person="三郎" from="鈴木" />
      {/* 数字で渡す */}
      <Die numSides={20} />
      <Die numSides={6}/>
      <Die numSides={10}/>
    </div>
  );
}

export default App
