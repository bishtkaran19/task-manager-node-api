const db = require("../db");

exports.getTasks = async (req, res) => {
  const result = await db.query("SELECT * FROM tasks");
  res.json(result.rows);
};

exports.createTask = async (req, res) => {
  const { title, description, status } = req.body;
  await db.query(
    "INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3)",
    [title, description, status]
  );
  res.status(201).json({ message: "Task created" });
};
