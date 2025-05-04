import express from "express";
import "dotenv/config";
import {
  createTaks,
  deleteTask,
  getIdTask,
  getTask,
  updateTask,
} from "./controller/list.controller.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/task", getTask);
app.get("/task/:id", getIdTask);
app.post("/task", createTaks);
app.put("/task/:id", updateTask);
app.delete("/task/:id", deleteTask);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
