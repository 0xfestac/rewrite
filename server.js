const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// 🔥 Webhook endpoint (THIS is your webhook URL path)
app.post("/alchemy-webhook", (req, res) => {
  console.log("🔥 Webhook received:");
  console.log(JSON.stringify(req.body, null, 2));

  // TODO: Add your logic here
  // e.g. verify tx, credit user, trigger betting bot

  res.status(200).send("Webhook received");
});

// Health check route
app.get("/", (req, res) => {
  res.send("🚀 Webhook server is running");
});

// Use Render's port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
