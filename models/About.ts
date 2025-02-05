import mongoose from "mongoose";


const HistorySchema = new mongoose.Schema({
    timeSpan:{
        type:String
    },
    heading:{
        type:String
    },
    description:{
        type:String
    }
})

const PartnersSchema = new mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String
    },
    description:{
        type:String
    }
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
  story: {
    type: String,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  history:[HistorySchema],
  partners:[PartnersSchema]
});



export default mongoose.models.About || mongoose.model("About", AboutSchema);