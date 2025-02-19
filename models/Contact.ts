import mongoose from "mongoose";



const ContentSchema = new mongoose.Schema({
    area:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    }
})


const ContactSchema = new mongoose.Schema({
  regionName: {
    type: String,
    required: true,
  },
  content:[ContentSchema]
});



export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);