import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string({ message: "title is required field" }),
  content: z.string({ message: "content is required field" }),
});

export const deletePostSchema = z.string({
  message: "Id is required for deleting post",
});

export const updatePostSchema = z.object({
  id: z.string({ message: "Id is required for updating post" }),
  title: z.string().optional(),
  content: z.string().optional(),
});

export const getPostSchema = z.string({
  message: "Id is required for getting post",
});
