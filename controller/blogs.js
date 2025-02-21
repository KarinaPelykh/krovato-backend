const { ctrlWrapper } = require("../decorator");
const Blogs = require("../models/blogs");

const getAllBlogs = async (req, res) => {
  const result = await Blogs.find();
  res.json(result);
};

module.exports = {
  getAllBlogs: ctrlWrapper(getAllBlogs),
};
