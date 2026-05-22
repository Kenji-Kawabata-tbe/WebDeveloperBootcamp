//これをコールバック関数にしているのは無料で公開されているAPIを叩きまくるのを防ぐため。
//インプットイベントで予測候補みたいに出力させることもできるが、検索候補が入力される度にAPIが叩かれると困るかもしれないのであえてそうしてる

const form = document.querySelector('#searchForm');
////function(e)はイベント発生時にブラウザが自動で渡してくれる「イベントオブジェクト」を受け取るための引数
////eやeventが慣習。
//form.addEventListener('submit', async function(e) {
//    e.preventDefault();
//    const searchTermInput = form.elements.query;
//    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTermInput.value}`);
//    //画像を一つだけ表示
//    //const img = document.createElement('IMG');
//    //img.src = res.data[0].show.image.medium;
//    //document.body.append(img);
//    makeImages(res.data);
//    searchTermInput.value = '';
//});
//
//const makeImages = (results) => {
//    for (let result of results) {
//        if (result.show.image) {
//            //console.log(result)
//            const img = document.createElement('IMG');
//            img.src = result.show.image.medium;
//            document.body.append(img);       
//        }
//    }
//}

//axiosでURLをより効率的に指定する
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTermInput = form.elements.query;
    const config = {
        //paramsに設定したキーと値がそのままQueryStringのキーと値になってくれる
        params: {
            q: searchTermInput.value
        }
    }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    //画像を一つだけ表示
    //const img = document.createElement('IMG');
    //img.src = res.data[0].show.image.medium;
    //document.body.append(img);
    makeImages(res.data);
    searchTermInput.value = '';
});

const makeImages = (results) => {
    for (let result of results) {
        if (result.show.image) {
            //console.log(result)
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);       
        }
    }
}
