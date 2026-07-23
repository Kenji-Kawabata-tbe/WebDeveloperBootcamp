class AppError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        //Errorクラスではstatusというプロパティに値を入れておくとExpressが自動的にデフォルトのエラーハンドラーでレスポンスのステータスコードにする
        this.status = status;
    }
}

//他でも使えるように
module.exports = AppError;
