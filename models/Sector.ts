import mongoose from "mongoose";

const FinishSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
});

const ApplicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  finishes: [FinishSchema],
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
    image_url: {
      type: String,
      required: true,
    },
    applications: [ApplicationSchema],
  },
  {
    timestamps: true,
  }
);

export const Sector = mongoose.models.Sector || mongoose.model("Sector", SectorSchema);
