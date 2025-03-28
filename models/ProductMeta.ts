import mongoose from "mongoose";

const ProductMetaSchema = new mongoose.Schema({
    metaTitle: String,
    metaDescription: String,
})

const ProductMeta = mongoose.models.ProductMeta || mongoose.model("ProductMeta", ProductMetaSchema);

export default ProductMeta;
