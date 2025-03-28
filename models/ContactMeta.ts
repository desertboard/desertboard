import mongoose from "mongoose";

const ContactMetaSchema = new mongoose.Schema({
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
});

const ContactMeta = mongoose.models.ContactMeta || mongoose.model("ContactMeta", ContactMetaSchema);

export default ContactMeta;
