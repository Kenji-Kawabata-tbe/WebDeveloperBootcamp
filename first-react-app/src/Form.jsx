function handleFormSubmit(evt) {
    // デフォルトの動作をしない。リフレッシュが走らない。
    evt.preventDefault();
    console.log('フォームが送信されました!')
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>送信</button>
        </form>
    );
}
