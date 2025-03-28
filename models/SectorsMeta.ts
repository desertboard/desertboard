import mongoose from "mongoose";

const SectorsMetaSchema = new mongoose.Schema({
  metaTitle: String,
  metaDescription: String,
});

const SectorsMeta = mongoose.models.SectorsMeta || mongoose.model("SectorsMeta", SectorsMetaSchema);

export default SectorsMeta;
