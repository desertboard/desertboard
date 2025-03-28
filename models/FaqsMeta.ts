import mongoose from "mongoose";

const FaqsMetaSchema = new mongoose.Schema({
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
});

export default mongoose.models.FaqsMeta || mongoose.model("FaqsMeta", FaqsMetaSchema);
