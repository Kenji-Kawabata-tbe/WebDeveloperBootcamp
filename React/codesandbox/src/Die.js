import "./Die.css";

export default function Die() {
  const roll = Math.floor(Math.random() * 6) + 1;
  //return <h2 className="">サイコロの出目：{roll}</h2>;
  //スタイルを当てる
  return <h2 className="Die">サイコロの出目：{roll}</h2>;
}
