import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";


const FaqsSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  customId:{
    type:String,
    unique:true,
    required:true
  }
});



export default mongoose.models.Faqs || mongoose.model("Faqs", FaqsSchema);