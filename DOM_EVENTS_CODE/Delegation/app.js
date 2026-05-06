const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

//submitとclickの違い
//enterを押した場合はsubmitが発火するのでsubmitにするとボタンを押すのとenterキーでの入力どちらにも対応できる
tweetForm.addEventListener('submit', function (e) {
    //preventDeaultでデフォルトの動きを止めることができる
    //この場合submitなので、リクエストが飛んでページが変わってしまうのを止めることが出来る
    e.preventDefault();

    //ツイート一覧の取得

    //このやり方でもできなくはないが、数が増えるとキリがない
    //const usernameInput = document.querySelectorAll('input')[0];
    //const tweetInput = document.querySelectorAll('input')[1];
    //console.log(usernameInput.value);
    //console.log(tweetInput.value);


    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    //const username = tweetForm.elements.username.value;
    //const tweet = tweetForm.elements.tweet.value;
    //addTweet(username, tweet);
    usernameInput.value = "";
    tweetInput.value = "";


})

const addTweet = (username, tweet) => {
    //liタグ作る
    const newTweet = document.createElement('li');
    //bタグ作る
    const bTag = document.createAttribute('b');
    //bTagの中にusernameを入れる
    bTag.append(username);
    //newTweet(li)にbTagを入れる
    newTweet.append(bTag);
    //bTagの後ろにtweetの内容を入れる
    newTweet.append(` - ${tweet}`);

    console.log(tweetForm.elements.username.value)
    console.log(tweetForm.elements.tweet.value)

    tweetsContainer.append(newTweet);
}





const form = document.querySelector('form');
const productInput = document.getElementById('product');
const qtyInput = document.getElementById('qty');
const list = document.getElementById('list');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // デフォルトの送信を止める

  const product = productInput.value;
  const qty = qtyInput.value;

  // li作成
  const li = document.createElement('li');
  li.textContent = `${product} - ${qty}`;

  // ulに追加
  list.appendChild(li);

  // inputをクリア
  productInput.value = '';
  qtyInput.value = '';
});


//この方法だと最初からあるliに対しては処理が有効になるが、後から追加されたliには処理が効かない
//const lis = document.querySelectorAll('li');
//for (let li of lis) {
//  li.addEventListener('click', function () {
//    li.remove();
//  })
//}

tweetsContainer.addEventListener('click', function(e) {
  // イベントのtargetには対象のタグが入っているのでそれをremoveする事ができる
  // ただし対象のタグを間違えクリックするとそれが削除されてしまう
  // console.dir(e.target);
  // e.target.remove();
  if (e.target.nodeName === 'LI') {
    e.target.remove();
  } else if (e.target.nodeName === 'B') {
    console.dir(e.target);
    e.target.parentElement.remove();
  }
})
