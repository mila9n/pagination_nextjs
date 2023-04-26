import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  id: Number,
  postId: Number,
  name: String,
  email: String,
  body: String,
});

mongoose.models = {};

export const Post = mongoose.model("Post", postSchema);
