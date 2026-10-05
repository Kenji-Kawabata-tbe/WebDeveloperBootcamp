const mongoose = require('mongoose');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose
  .connect("mongodb://localhost:27017/yelp-camp", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log("MongoDB コネクションOK！！");
  })
  .catch((err) => {
    console.log("MongoDB コネクションエラー！！！");
    console.log(err);
  });

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++) {
        const randomCityIndex = Math.floor(Math.random() * cities.length);
        const price = Math.floor(Math.random() * 2000) + 1000;
        const camp = new Campground({
            //mongoのyelp-camp -> db.users.find({username: 'sato'})の_id macとwindowsで違うはず
            author: '6ab4f8ad0e4e873a693bbc05',
            location: `${cities[randomCityIndex].prefecture}${cities[randomCityIndex].city}`,
            title: `${sample(descriptors)}・${sample(places)}`,
            //image: `https://picsum.photos/400?random=${Math.random()}`,
            images: [
                {
                  url: 'https://res.cloudinary.com/t2slgzv5/image/upload/v1791194590/YelpCamp/stl1qymxh7wifrvyqkjg.png',
                  filename: 'YelpCamp/stl1qymxh7wifrvyqkjg'
                },
                {
                  url: 'https://res.cloudinary.com/t2slgzv5/image/upload/v1791194600/YelpCamp/m79k6xm9kdw5db0cy2ke.png',
                  filename: 'YelpCamp/m79k6xm9kdw5db0cy2ke'
                }
              ],
            description: '私も今よくこの自覚家に従ってのの所zから恐れ入りでな。何しろ多年が説明者はいよいよその教育たなかっだけを折っがいるありには意味落ちつくででば、だんだんには思うたなけれたなけれ。主義にしたらのもよく十月にまあうたた。とやかく岡田さんから話書生元々学習が籠っな主義この諸君何か乱暴にというご授業たたたらたから、わが十一月はそこか自分シャツを見えて、大森さんののへ先の私にそんなに皆希望と行っば私女学校にお濫用に反しようにしかるにお返事の入っましましょば、さぞよく納得を進みたていでののやむをえたた。',
            //price = priceの略
            price

        });
        await camp.save();
    }
}

//seedDBの処理が終わったらmongooseのセッションを閉じる
seedDB().then(() => {
    mongoose.connection.close();
});
