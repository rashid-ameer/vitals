import type { Document } from "mongoose";

export interface PostDocument extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
