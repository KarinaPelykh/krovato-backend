const { Schema, model } = require("mongoose");

const blogsSchema = new Schema({
  title: String,
  image: String,
  description: String,
  info: Object,
});

const Blogs = model("blog", blogsSchema);
module.exports = Blogs;
