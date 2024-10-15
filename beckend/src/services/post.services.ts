import ApiError from "../lib/api-error";
import PostModel from "../models/post.model";

type CreatePostProps = { title: string; content: string };
export const createPost = async (data: CreatePostProps) => {
  const post = await PostModel.create(data);
  if (!post) {
    throw new ApiError(500, "Error creating post");
  }
  return post;
};
