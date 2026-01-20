const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

// TEST ROUTE
app.get("/test", (req, res) => {
  res.send("Server is working");
});

// TASK ROUTES
app.use("/api/tasks", taskRoutes);

module.exports = app;