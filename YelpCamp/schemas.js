// joi バリデーション用のミドルウェア
const joi = require('joi');

// joiのスキーマというものを定義。DBのスキーマとは違う。データの型定義みたいな感じ。
module.exports.campgroundSchema = joi.object({
    campground: joi.object({
        title: joi.string().required(),
        price: joi.number().required().min(0),
        image: joi.string().required(),
        location: joi.string().required(),
        description: joi.string().required()
    }).required()
});
