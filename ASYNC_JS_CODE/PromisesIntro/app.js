// コールバック版
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('コネクションタイムアウト')
        } else {
            success(`ダミーデータ(${url})`)
        }
    }, delay)
}

fakeRequestCallback('books.com', function () {
    console.log('成功!!');
}, function () {
    console.log('エラー!!!');
})

//こうすると、成功の時はresponseに`ダミーデータ(${url})`が入り、errに'コネクションタイムアウト'が入る
fakeRequestCallback('books.com', function (response) {
    console.log('成功!!');
    console.log(response);
}, function () {
    console.log('エラー!!!', err);
})


fakeRequestCallback('books.com/page1', function (response) {
    console.log('成功！！');
    console.log(response);
    fakeRequestCallback('books.com/page2', function (response) {
        console.log('成功2！！');
        console.log(response);
        fakeRequestCallback('books.com/page3', function (response) {
            console.log('成功3！！');
            console.log(response);
        }, function (err) {
            console.log('エラー3！！！', err);
        })
    }, function (err) {
        console.log('エラー2！！！', err);
    })
}, function (err) {
    console.log('エラー！！！', err);
})










// Promise版
// promiseは非同期処理の最終的な完了もしくは失敗を表すオブジェクト
// 未来のある時点で値を持つことを約束してくれるオブジェクト promise=約束
// 成功したことでもらえる値かもしれないし失敗したことによってもらう値かもしれない
// 晩御飯全部食べたらデザート有り、食べられなかったらデザート無しみたいな。
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            //reject promiseオブジェクトに失敗した場合のコールバック関数
            //resolve promiseオブジェクトに成功した場合のコールバック関数
            //非同期処理の関数に引数としてコールバック関数を渡すのではなく、
            //関数から帰ってきたプロミスオブジェクトにコールバックを登録することができる

            if (delay > 4000) {
                reject('コネクションタイムアウト')
            } else {
                resolve(`ダミーデータ(${url})`)
            }
        }, delay)
    })
}

const request = fakeRequestPromise('yelp.com/api/coffee');
// then 成功した場合
request.then(() => {
    console.log('成功!!!');
// cathc 失敗した場合
}).catch(() => {
    console.log('失敗!!!');
})

//これだとコールバックとあまり変わらない
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log('成功1！！！');
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log('成功2！！！');
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log('成功3！！！');
                    })
                    .catch(() => {
                        console.log('失敗3！！！！');
                    });
            })
            .catch(() => {
                console.log('失敗2！！！！');
            });
    })
    .catch(() => {
        console.log('失敗1！！！！');
    });


fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log('成功1!!!');
        // thenからpromiseをreturnすることができる
        // そうすることでその続きを次のthenにつなげることができる
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(() => {
        console.log('成功2!!!');
        fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log('成功3!!!');
    })
    // catchは最後だけでOK
    // どこで失敗したかを知りたい場合は途中でcatchを入れてもOK
    .catch(() => {
        console.log('失敗!!!');
    })


//promiseが成功した時と失敗した時の値
//この場合、dataにresolveの値が入り、errにrejectの値が入る
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('成功1！！！');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log('成功2！！！');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('成功3！！！');
        console.log(data);
    })
    .catch((err) => {
        console.log('失敗！！！！');
        console.log(err);
    });
