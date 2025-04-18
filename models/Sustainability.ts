import mongoose from "mongoose";


const RoleSchema = new mongoose.Schema({
    image: {
        type: String
    },
    logo: {
        type: String
    },
    title: {
        type: String
    },
    description:{
        type:String
    },
    imageAlt:{
        type:String
    },
    logoAlt:{
        type:String
    }
})


const VisionSchema = new mongoose.Schema({
    image: {
        type: String
    },
    title: {
        type: String
    },
    description:{
        type:String
    },
    region:{
        type:String
    },
    imageAlt:{
        type:String
    }
})


const SustainabilitySchema = new mongoose.Schema({
    bannerImage:{
        type:String
    },
    bannerImageAlt:{
        type:String
    },
    pageHeading: {
        type: String,
        required: true,
    },
    pageDescription: {
        type: String,
        required: true,
    },
    heading: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ""
    },
    imageAlt:{
        type:String
    },
    roles: [RoleSchema],
    goals: {
        heading: {
            type: String
        },
        description: {
            type: String
        },
        goals: [
            {
                image: {
                    type: String
                },
                logo: {
                    type: String
                },
                heading: {
                    type: String
                },
                description: {
                    type: String
                },
                imageAlt:{
                    type:String
                },
                logoAlt:{
                    type:String
                }
            }
        ]
    },
    partners: {
        heading: {
            type: String
        },
        description: {
            type: String
        },
        partners: [
            {
                title: {
                    type: String
                },
                description: {
                    type: String
                },
            }
        ]
    },
    vision: [VisionSchema],
    metaTitle: {
        type: String
    },
    metaDescription: {
        type: String
    }
});



export default mongoose.models.Sustainability || mongoose.model("Sustainability", SustainabilitySchema);