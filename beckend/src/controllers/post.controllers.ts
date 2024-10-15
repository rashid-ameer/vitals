import ApiResponse from "../lib/api-response";
import asyncHandler from "../lib/async-handler";
import { createPostSchema } from "../schemas/post.schemas";
import { createPost } from "../services/post.services";

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
