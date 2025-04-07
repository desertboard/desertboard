import mongoose from "mongoose";

const GTMConfigSchema = new mongoose.Schema({
  gtmId: {
    type: String,
    required: true,
  },
  googleAnalyticsId: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.GTMConfig || mongoose.model("GTMConfig", GTMConfigSchema);
