// asyncのtry-catchをやってくれる関数
// 関数を受け取って関数を返す 受け取る関数はasync
// もしエラーがあればcatchでeを返す
module.exports = func => {
    // expressのハンドラーに返す
    return (req, res, next) => {
        func(req, res, next).catch(e => next(e));
    }
}


