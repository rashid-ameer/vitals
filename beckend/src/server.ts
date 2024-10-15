import "dotenv/config";
import app from "./app";
import { PORT } from "./constants/env";
import ApiResponse from "./lib/api-response";

// health check
app.use("/", (req, res) => {
  res.json(new ApiResponse("Servis is running"));
});

// starting server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
