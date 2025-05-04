import { list } from "../models/list.js";

export const getTask = async function (req, res) {
  try {
    const listAll = await list.findAll();
    if (listAll.length > 0) {
      res.status(200).json({ data: listAll });
    } else {
      res.status(400).json({ message: "Dont have task" });
    }
  } catch (error) {
    res.status(500).json({ message: `Something gone wrong ${error.message}` });
  }
};

export const getIdTask = async function (req, res) {
  try {
    const id = req.params.id;
    const task = await list.findByPk(id);
    if (task) {
      res.status(200).json({ data: task });
    } else {
      res.status(400).json({ message: "The task don´t found" });
    }
  } catch (error) {
    res.status(500).json({ message: `Something gone wrong ${error.message}` });
  }
};

export const createTaks = async function (req, res) {
  try {
    const task = await list.create(req.body);
    if (task) {
      res.status(202).json({ message: "The task was create successfully" });
    } else {
      res.status(400).json({ message: "something fail with save the task" });
    }
  } catch (error) {
    res.status(500).json({ message: `Something gone wrong ${error.message}` });
  }
};

export const updateTask = async function (req, res) {
  try {
    const id = req.params.id;
    const task = await list.findByPk(id);
    if (task) {
      await task.update(req.body);
      res.status(200).json({ message: `The task ${id} was update` });
    } else {
      res.status(400).json({ message: `The task ${id} dont found` });
    }
  } catch (error) {
    res.status(500).json({ message: `Something gone wrong ${error.message}` });
  }
};

export const deleteTask = async function (req, res) {
  try {
    const id = req.params.id;
    const task = await list.findByPk(id);
    if (task) {
      await task.destroy();
      res.json({ message: `The task ${id} was deleted` });
    } else {
      res.json({ message: "The task dont found" });
    }
  } catch (error) {
    res.status(500).json({ message: `Something gone wrong ${error.message}` });
  }
};
