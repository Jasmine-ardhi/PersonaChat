import express from "express";
import cors from "cors";
import "dotenv/config";

import chatRoute from "./routes/chat.js";

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  console.log("ROOT HIT");
  res.send("Server is working");
});

// Chat route
app.use("/chat", chatRoute);

const PORT = 5000;

// 🔥 IMPORTANT: wrap in function
async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  // 🔥 keep event loop alive manually (temporary fix)
  setInterval(() => {}, 1000);
}

startServer();