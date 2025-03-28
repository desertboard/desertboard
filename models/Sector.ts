import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bannerImage:{
    type:String,
    required:true
  },
  product: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gallery:[String],
  shortDescription:{
    type:String
  },
  metaTitle:{
    type:String
  },
  metaDescription:{
    type:String
  }
});

const SectorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    bannerImage: {
      type: String,
      required: false,
    },
    shortDescription: {
      type: String,
      required: false,
    },
    metaTitle: {
      type: String,
      required: false,
    },
    metaDescription: {
      type: String,
      required: false,
    },
    applications: [ApplicationSchema],
  },
  {
    timestamps: true,
  }
);

export const Sector = mongoose.models.Sector || mongoose.model("Sector", SectorSchema);
