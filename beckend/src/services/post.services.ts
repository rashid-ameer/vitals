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

export const deletePost = async (id: string) => {
  const post = await PostModel.deleteOne({ _id: id });
  if (post.deletedCount === 0) {
    throw new ApiError(404, "Post not found");
  }
};

type UpdatePostProps = { id: string; title?: string; content?: string };
export const updatePost = async ({ id, title, content }: UpdatePostProps) => {
  const post = await PostModel.findById(id);
  if (!post) {
    throw new ApiError(404, "Post not found");
  }

  post.title = title || post.title;
  post.content = content || post.content;

  const newPost = await post.save();

  return newPost;
};

export const getPosts = async () => {
  const posts = await PostModel.find();
  return posts;
};

export const getPost = async (id: string) => {
  const post = await PostModel.findById(id);
  if (!post) {
    throw new ApiError(404, "Post not found");
  }
  return post;
};
