import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string({ message: "title is required field" }),
  content: z.string({ message: "content is required field" }),
});
