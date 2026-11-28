import './Button.css';

function Button({ clickFunc, label = 'クリックして' }) {
  return (
    <button onClick={clickFunc} className="Button">
      {label}
    </button>
  );
}
export default Button;
