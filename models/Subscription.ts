import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
    email:String
})

export default mongoose.models.Subscription || mongoose.model("Subscription", SubscriptionSchema);