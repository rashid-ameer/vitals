import express from "express";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.routes";
import errorHandler from "./middlewares/error-handler.middlewares";

// creating app
const app = express();

// setting up middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// defining routes
app.use("/post", postRouter);

// error handler middleware
app.use(errorHandler);

//exporting app
export default app;
