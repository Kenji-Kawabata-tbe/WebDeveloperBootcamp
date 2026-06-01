const jokes = require('give-me-a-joke');
const colors = require('colors');
console.log(jokes);

jokes.getRandomDadJoke(function (joke) {
    // colorsという変数は使っていないがおそらくrequireした段階で
    // stringのプロトタイプにプロパティを追加しているのでどんなstringにもcolorsのプロパティが使えるのだと思われる
    console.log(joke.rainbow);
});
