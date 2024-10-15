import { ErrorRequestHandler } from "express";
import ApiError from "../lib/api-error";
import { ZodError } from "zod";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(
    `Method: ${req.method} - Path: ${req.path} - Error: ${err.message}`
  );
  console.log("Error: ", err);

  if (err instanceof ApiError) {
    res.status(err.status).json({
      message: err.message,
      errorCode: err.errorCode,
    });

    return;
  }

  if (err instanceof ZodError) {
    res.status(400).json({ message: err.errors[0].message });
    return;
  }

  res.status(500).json({
    message: "Internal server error",
  });
};

export default errorHandler;
