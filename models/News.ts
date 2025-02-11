import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  tags: [String],
  date: Date,
  sector: String,
  type: String,
});

const News = mongoose.models.News || mongoose.model("News", NewsSchema);

export default News;
