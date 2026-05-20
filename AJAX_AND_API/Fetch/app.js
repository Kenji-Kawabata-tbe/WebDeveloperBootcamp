//fetchでリクエストを投げるとpromiseが返ってくる
//fetch('GET', 'https://swapi.info/api/people/1/')
//    //responseオブジェクトの取得
//    .then((res) => {
//        console.log('RESOLVE!!!', res);
//        //responseオブジェクトの取得後は
//        //そこからbodyを読み込むためにJSONをさらに呼んで、そのpromiseのresolveを待つ必要がある
//        //res.json().then((data) => console.log('JSON get', data));
//        return res.json()
//    })
//    .then((data) => {
//        console.log(data);
//        return fetch('https://swapi.info/api/people/2/')
//    })
//    .then((res) => {
//        console.log('2個目のリクエストがRESOLVE!!!', res);
//        return res.json();
//    })
//
//    .then((data) => {
//        console.log(data);
//    })
//
//    .catch((err) => {
//        console.log('error!!!', err);
//    })

//async,await版
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch('GET', 'https://swapi.info/api/people/1/');
        const data = await res.json;
        console.log(data);

        const res2 = await fetch('GET', 'https://swapi.info/api/people/2/');
        const data2 = await res.json;
        console.log(data2);
    } catch (e) {
        console.log('エラー!!!', e);
    }

}
loadStarWarsPeople();
