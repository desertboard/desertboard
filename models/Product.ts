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

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  specifications: {
    type: [SpecificationSchema],
    required: true,
  },
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
