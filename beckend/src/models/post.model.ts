import mongoose, { Schema } from "mongoose";
import { PostDocument } from "../types/model.types";

const postSchema = new Schema<PostDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model<PostDocument>("Post", postSchema);
export default PostModel;
