import { Router } from "express";
import { createPostHandler } from "../controllers/post.controllers";

// creating router
const postRouter = Router();

// routes
postRouter.post("/create", createPostHandler);

// exporting router
export default postRouter;
