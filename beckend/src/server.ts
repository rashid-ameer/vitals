import "dotenv/config";
import app from "./app";
import { PORT } from "./constants/env";

// health check
app.use("/", (req, res) => {
  res.json({ status: "Healthy" });
});

// starting server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
