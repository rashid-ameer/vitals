import { Router } from "express";
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  getPostsHandler,
  updatePostHandler,
} from "../controllers/post.controllers";

// creating router
const postRouter = Router();

// routes
postRouter.post("/create", createPostHandler);
postRouter.delete("/delete/:id", deletePostHandler);
postRouter.put("/update/:id", updatePostHandler);
postRouter.get("/", getPostsHandler);
postRouter.get("/:id", getPostHandler);
// exporting router
export default postRouter;
