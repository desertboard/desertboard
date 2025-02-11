import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";


const FaqsSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
  },
  contents:[{
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  }]
});



export default mongoose.models.Faqs || mongoose.model("Faqs", FaqsSchema);