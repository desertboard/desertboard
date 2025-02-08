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
    }
})

const GoalsSchema = new mongoose.Schema({
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
            }
        }
    ]
})


const PartnersSchema = new mongoose.Schema({
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
})

const VisionSchema = new mongoose.Schema({
    image: {
        type: String
    },
    title: {
        type: String
    }
})


const SustainabilitySchema = new mongoose.Schema({
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
                }
            }
        ]
    },
    partners: PartnersSchema,
    vision: [VisionSchema]
});



export default mongoose.models.Sustainability || mongoose.model("Sustainability", SustainabilitySchema);