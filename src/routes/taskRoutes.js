const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all tasks
router.get("/", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST a new task  👇👇👇 PASTE HERE (BELOW GET)
router.post("/", (req, res) => {
  const { title, description, status } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const sql =
    "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)";

  db.query(sql, [title, description, status || "Pending"], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: "Task created successfully",
      taskId: result.insertId,
    });
  });
});

// UPDATE a task
router.put("/:id", (req, res) => {
  const { title, description, status } = req.body;
  const { id } = req.params;

  const sql =
    "UPDATE tasks SET title=?, description=?, status=? WHERE id=?";

  db.query(
    sql,
    [title, description, status, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Task not found" });
      }

      res.json({ message: "Task updated successfully" });
    }
  );
});

// DELETE a task
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM tasks WHERE id=?", [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  });
});

module.exports = router;