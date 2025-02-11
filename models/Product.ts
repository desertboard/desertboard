import mongoose from "mongoose";

const SpecificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const SubSectionSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const BestPracticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const FinishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  specifications: {
    type: [SpecificationSchema],
    required: true,
  },
  subSections: {
    type: [SubSectionSchema],
    required: true,
  },
  bestPractices: {
    type: [BestPracticeSchema],
    required: true,
  },
  finishes: {
    type: [FinishSchema],
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
