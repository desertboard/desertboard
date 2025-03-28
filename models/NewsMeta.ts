import mongoose from "mongoose";

const newsMetaSchema = new mongoose.Schema({
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
});

const NewsMeta = mongoose.models.NewsMeta || mongoose.model("NewsMeta", newsMetaSchema);

export default NewsMeta;
