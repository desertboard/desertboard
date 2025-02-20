import mongoose from "mongoose";



const HomeSchema = new mongoose.Schema({
    pageHeading: {
        type: String,
    },
    pageDescription: {
        type: String,
    },
    inspiration: {
        type: String,
    },
    video: {
        type: String,
    },
    thirdSection: {
        heading:{
            type:String,
        },
        contents:[
            {
                logo: String,
                image: String,
                title: String,
                description: String,
            }
        ]
    },
    sectorsDescription: {
        type: String,
    },
    sustainabilitySection: {
        heading:{
            type:String
        },
        contents:[
            {
                logo: String,
                image: String,
                title: String,
                description: String,
            }
        ]
    }
});


export default mongoose.models.Home || mongoose.model("Home" , HomeSchema)