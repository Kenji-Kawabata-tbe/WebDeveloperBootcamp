class ExpressError extends Error {
    constructor(message, statusCode) {
        //親クラス(この場合Error)のconstructorもおまじないのように実施する
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}
//外からも使えるように
module.exports = ExpressError
