import mongoose from "mongoose";

const FileMetaSchema = new mongoose.Schema({
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
});

const FileMeta = mongoose.models.FileMeta || mongoose.model("FileMeta", FileMetaSchema);

export default FileMeta;
