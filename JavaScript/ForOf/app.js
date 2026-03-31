const subreddits = [
    'cooking',
    'books',
    'chikens',
    'life',
    'pics',
    'soccer',
    'movies',
];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

// for of 列挙可能なオブジェクトを順番に処理できる
for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`);
}

const testScores = {
    kent: 80,
    chris: 90,
    darryl: 70,
    vik: 85,
    jason: 95,
    thomas: 75,
    james: 85,
    michael: 95,
    ethan: 75,
    william: 85,
}

for (let person of Object.keys(testScores)) {
    // testScoresはオブジェクトなのでこれはエラーになる。そのままでは列挙できない。
    console.log(person);
    console.log(`${person} さんは ${testScores[person]}点です。`);
}

for (let person in testScores) {
    console.log(person);
    console.log(`${person} さんは ${testScores[person]}点です。`);
}

