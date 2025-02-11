import mongoose from "mongoose";

const FinishSchema = new mongoose.Schema({
  name: {
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
});

const Finish = mongoose.models.Finish || mongoose.model("Finish", FinishSchema);

export default Finish;
