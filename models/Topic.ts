import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

const TopicTypeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  files: {
    type: [FileSchema],
    required: true,
  },
});

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  types: {
    type: [TopicTypeSchema],
    required: true,
  },
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", TopicSchema);

export default Topic;
