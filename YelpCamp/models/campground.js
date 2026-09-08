const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    // campgroundにreviewスキーマを関連付ける
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

//レビューの削除
campgroundSchema.post('findOneAndDelete', async function (doc) {
    //console.log(doc);
    if (doc) {
        await Review.deleteMany({
            // _idの値がdoc.reviewsに含まれていたら
            _id: {
                $in: doc.reviews
            }
        })

    }
});

module.exports = mongoose.model('Campground', campgroundSchema);
