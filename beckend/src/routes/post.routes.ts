import { Router } from "express";
import {
  createPostHandler,
  deletePostHandler,
  updatePostHandler,
} from "../controllers/post.controllers";

// creating router
const postRouter = Router();

// routes
postRouter.post("/create", createPostHandler);
postRouter.delete("/delete/:id", deletePostHandler);
postRouter.put("/update/:id", updatePostHandler);

// exporting router
export default postRouter;
