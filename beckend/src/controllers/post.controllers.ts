import ApiResponse from "../lib/api-response";
import asyncHandler from "../lib/async-handler";
import {
  createPostSchema,
  deletePostSchema,
  updatePostSchema,
} from "../schemas/post.schemas";
import { createPost, deletePost, updatePost } from "../services/post.services";

export const createPostHandler = asyncHandler(async (req, res) => {
  // validate a request
  const request = createPostSchema.parse(req.body);
  // call a service
  const post = await createPost(request);
  // send a response
  res
    .status(201)
    .json(new ApiResponse<typeof post>("Post created successfully", post));
});

export const deletePostHandler = asyncHandler(async (req, res) => {
  // validate a request
  const request = deletePostSchema.parse(req.params.id);
  // call a service
  await deletePost(request);
  // send a response
  res.status(200).json(new ApiResponse("Post deleted successfully"));
});

export const updatePostHandler = asyncHandler(async (req, res) => {
  // validate a request
  const request = updatePostSchema.parse({ id: req.params.id, ...req.body });
  // call a service
  const post = await updatePost(request);
  // send a response
  res
    .status(200)
    .json(new ApiResponse<typeof post>("Post updated successfully", post));
});
