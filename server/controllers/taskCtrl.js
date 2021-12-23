const Task = require("../models/Task");

class TaskCtrl {
  static async create(req, res) {
    try {
      const newTask = await Task.create(req.body);
      res.status(200).send(newTask);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  static async getAll(req, res) {
    try {
      const allTasks = await Task.find();
      res.status(200).send(allTasks);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async edit(req, res) {
    try {
      const edit = await Task.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).send(edit);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async complete(req, res) {
    try {
      const completeTask = await Task.findByIdAndUpdate(
        { _id: req.body.id },
        { $set: { done: true } },
        { new: true }
      );
      res.status(200).send(completeTask);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async remove(req, res) {
    try {
      await Task.findByIdAndDelete({ _id: req.params.id });
      res.status(200).send("OK");
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async allCompleted(req, res) {
    try {
      const allCompleted = await Task.find({ done: true });
      res.status(200).send(allCompleted);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async notCompleted(req, res) {
    try {
      const notCompleted = await Task.find({ done: false });
      res.status(200).send(notCompleted);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = TaskCtrl;
