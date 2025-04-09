import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  time: String,
  image: String,
  location: String,
  description: String,
  tickets:String,
  website:String,
  imageAlt:String
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
