import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  title: String,
  slug:String,
  description: String,
  images: [String],
  tags: [String],
  date: Date,
  sector: String,
  type: String,
  metaTitle: String,
  metaDescription: String,
  imageAlt:String
});

const News = mongoose.models.News || mongoose.model("News", NewsSchema);

export default News;
