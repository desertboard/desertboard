import mongoose from "mongoose";

const GlossaryMetaSchema = new mongoose.Schema({
    metaTitle:String,
    metaDescription:String
})

const GlossaryMeta = mongoose.models.GlossaryMeta || mongoose.model("GlossaryMeta",GlossaryMetaSchema)

export default GlossaryMeta