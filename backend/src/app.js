const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const pageRoutes = require("./routes/pageRoutes");

const authenticate = require("./middleware/authMiddleware");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/pages", pageRoutes);

// API test blocks
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "RenewCred CMS API is running"
  });
});

app.get("/api/v1", (req, res) => {
  res.json({
    success: true,
    message: "API Version 1",
  });
});



app.get("/api/v1/profile", authenticate, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

module.exports = app;