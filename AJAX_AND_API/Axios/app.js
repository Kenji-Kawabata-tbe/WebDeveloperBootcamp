axios.get('https://swapi.info/api/people/1/')
    //fetchの時は最初のresolveではbodyは手に入らないのでJSONを呼ぶ必要があったが
    //axiosはそれが不要。axiosのレスポンスのdataの中にJSONの内容が入っている。
    .then(res => {
        console.log('RESPONSE!', res);
    })
    .catch(e => {
        console.log('ERROR!!!', e);
    })

//async版
//const getStarWarsPerson = async () => {
//    const res = await axiow.get('https://swapi.info/api/people/1/');
//    console.log(res.data);
//}
//getStarWarsPerson();
const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.info/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log('ERROR', e)
    }
}
getStarWarsPerson(1);
getStarWarsPerson(21);



// https://icanhazdadjoke.com/からjokeを取得

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
//axiosでHTTPヘッダーを設定
//const getDadJoke = async () => {
//    const config = {
//        headers: {
//            //これでJSONが返ってくるのはicanhazdadjokeのAPIの使用。
//            //どう指定すればいいかはアプリケーションの実装次第
//            Accept: 'application/json'
//        }
//    };
//    const res = await axios.get('https://icanhazdadjoke.com/', config);
//    console.log(res.data.joke);
//
//    //liを新しく作る
//    const newLI = document.createElement('LI');
//    //liに取得したjokeを追加
//    newLI.append(res.data.joke);
//    //jokes(ulで指定しているidをconstで設定している)にnewLIを追加    
//    jokes.append(newLI);
//}


const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                //これでJSONが返ってくるのはicanhazdadjokeのAPIの使用。
                //どう指定すればいいかはアプリケーションの実装次第
                Accept: 'application/json'
            }
        };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return 'No Jokes! Sorry!!!'
    }
}

//ボタンをクリックしてjokeをリストで追加
const addNewJoke = async () => {
    //getDadJokeはasync関数なのでaddNewJokeもasyncにしてgetDadJokeをawaitにする
    const jokeText = await getDadJoke();
    //liを新しく作る
    const newLI = document.createElement('LI');
    //liに取得したjokeを追加
    newLI.append(jokeText);
    //jokes(ulで指定しているid)にnewLIを追加    
    jokes.append(newLI);
}

button.addEventListener('click', addNewJoke);
