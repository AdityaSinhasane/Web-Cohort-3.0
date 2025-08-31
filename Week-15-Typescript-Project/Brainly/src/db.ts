// create user models and schemas here

import mongoose, { model, Schema } from 'mongoose';

mongoose.connect("");

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
});

const ContentSchema = new Schema({
    type: String,
    link: String,
    title: String,   // ✅ added field
    tags: [{ type: mongoose.Types.ObjectId, ref: 'tags' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'users', required: true }
});

const LinksSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'users', required: true, unique: true}
    
});


export const UserModel = model("users", UserSchema);
export const ContentModel = model("contents", ContentSchema);
export const LinkModel = model("links", LinksSchema);

