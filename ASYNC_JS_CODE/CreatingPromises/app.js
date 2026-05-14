//パラメーター名はresolve,rejectじゃなくてもいいけど慣習でこれが多い
//成功した場合はresolve,失敗したらrejectが使用される
//new Promise((resolve, reject) => {
//
//})

//const fakeRequest = (url) => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve();
//        }, 1000)
//    });
//}
//
//fakeRequest('/hoge')
//    .then(() => {
//        console.log('成功！！！！');
//    })


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();

        setTimeout(() => {
            if (rand < 0.7) {
                resolve('ダミーデータです');
                //早めにresolveする場合はreturnを入れるか後段の処理をelseにするかが必要。
                //resolveで処理が終わる訳ではないのでこれらがないと処理が続いてしまう
                return;
            }
            reject('コネクションタイムアウト');
        }, 1000)
    });
}

//dataとerrにはそれぞれresolveとrejectの値が入る
fakeRequest('/hoge')
    .then((data) => {
        console.log('成功!!!');
        console.log(data);
    })
    .catch((err) => {
        console.log('エラー!!!', err);
    })




//const delayedColorChange = (newColor, delay, doNext) => {
//    setTimeout(() => {
//        document.body.style.backgroundColor = newColor;
//        doNext();
//    }, delay);
//}
//
//delayedColorChange('red', 1000, () => {
//    delayedColorChange('orange', 1000, () => {
//        delayedColorChange('yellow', 1000, () => {
//            delayedColorChange('green', 1000, () => {
//            });          
//        });
//    });    
//});

// ↑のpromiss版
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))
