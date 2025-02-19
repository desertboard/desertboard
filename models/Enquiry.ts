import mongoose from "mongoose";


const EnquirySchema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  enquiry:[
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        message:{
            type:String,
        },
        resume:{
            type:String
        }
    }
  ]
});



export default mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);