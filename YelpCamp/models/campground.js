const mongoose = require('mongoose');
const review = require('./review');
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

module.exports = mongoose.model('Campground', campgroundSchema);
