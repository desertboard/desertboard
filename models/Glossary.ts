import mongoose from "mongoose";


const ContentSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    }
})


const GlossarySchema = new mongoose.Schema({
  alphabet: {
    type: String,
    required: true,
  },
  contents:[ContentSchema]
});



export default mongoose.models.Glossary || mongoose.model("Glossary", GlossarySchema);