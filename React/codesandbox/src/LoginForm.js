export default function LoginForm() {
  return (
    <form>
      <input type="password" />
      <input type="password" />
      <button>Login</button>
    </form>
    // Reactフラグメント
    // 空のタグを書いてトップレベルの一つの要素の中に他の要素がいるというJSXのルールを満たす事ができる
    //<>
    //  <input type="password" />
    //  <input type="password" />
    //  <button>Login</button>
    //</>
  );
}
