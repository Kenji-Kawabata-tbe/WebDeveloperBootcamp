const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

//https://cloudinary.com/documentation/image_transformations

const imageSchema = new Schema({
    url: String,
    filename: String,
});
imageSchema.virtual('thumbnail').get(function() {
    return this.url.replace('/upload', '/upload/w_200');
});

const campgroundSchema = new Schema({
    title: String,
    images: [imageSchema],
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
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
