import express from "express";
import cookieParser from "cookie-parser";

// creating app
const app = express();

// setting up middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// defining routes

//exporting app
export default app;
