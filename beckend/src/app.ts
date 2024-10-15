import express from "express";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.routes";

// creating app
const app = express();

// setting up middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// defining routes
app.use("/post", postRouter);

//exporting app
export default app;
