import mongoose from "mongoose";



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
    linkLabel:{
      type:String
    },
    link:{
      type:String
    }
  }],
});



export default mongoose.models.Faqs || mongoose.model("Faqs", FaqsSchema);