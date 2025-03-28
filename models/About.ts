import mongoose from "mongoose";


const HistorySchema = new mongoose.Schema({
  image:{
    type:String
  },
  timeSpan: {
    type: String
  },
  heading: {
    type: String
  },
  description: {
    type: String
  }
})

const PartnersSchema = new mongoose.Schema({
  description: {
    type: String
  },
  partners: [
    {
      image: {
        type: String
      },
      name: {
        type: String
      },
      description: {
        type: String
      }
    }
  ]

})


const AboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bannerImage:{
    type:String
  },
  story: {
    type: String,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  vision:{
    type:String,
    required:true
  },
  history: [HistorySchema],
  partners: PartnersSchema,
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  }
});



export default mongoose.models.About || mongoose.model("About", AboutSchema);