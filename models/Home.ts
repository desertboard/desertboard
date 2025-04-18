import mongoose from "mongoose";



const HomeSchema = new mongoose.Schema({
    pageHeading: {
        type: String,
    },
    pageDescription: {
        type: String,
    },
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
    bannerVideo:{
        type:String
    },
    bannerPoster:{
        type:String
    },
    bannerImageAlt:{
        type:String
    },
    secondSectionTitle:{
        type:String
    },
    secondSectionSubTitle:{
        type:String
    },
    inspiration: {
        type: String,
    },
    video: {
        type: String,
    },
    videoPoster:{
        type:String
    },
    videoPosterAlt:{
        type:String
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
                imageAlt:String,
                logoAlt:String
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
        description:{
            type:String
        },
        contents:[
            {
                logo: String,
                image: String,
                title: String,
                description: String,
                imageAlt:String,
                logoAlt:String
            }
        ]
    }
});


export default mongoose.models.Home || mongoose.model("Home" , HomeSchema)