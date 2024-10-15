import ApiResponse from "../lib/api-response";
import asyncHandler from "../lib/async-handler";
import {
  createPostSchema,
  deletePostSchema,
  getPostSchema,
  updatePostSchema,
} from "../schemas/post.schemas";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../services/post.services";

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

export const getPostsHandler = asyncHandler(async (req, res) => {
  // call a service
  const posts = await getPosts();
  // send a resposne
  res
    .status(200)
    .json(new ApiResponse<typeof posts>("Posts fetched successfully", posts));
});

export const getPostHandler = asyncHandler(async (req, res) => {
  // validate a request
  const request = getPostSchema.parse(req.params.id);
  // call a service
  const post = await getPost(request);
  // send a response
  res
    .status(200)
    .json(new ApiResponse<typeof post>("Post fetched successfully", post));
});
