import "dotenv/config";
import app from "./app";
import { PORT } from "./constants/env";
import ApiResponse from "./lib/api-response";
import connectDB from "./lib/db";

// health check
app.use("/", (req, res) => {
  res.json(new ApiResponse("Status is Healthy"));
});

// starting server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB();
});
