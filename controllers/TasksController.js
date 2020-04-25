const Task = require('../models/Task');

exports.getTasks = (req, res) => {
  Task.all().then((tasks) => {
    res.json(tasks);
  })
};

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
      Task.find(id).then((task) => res.json(task));
  });
};

exports.markAsDone = (req, res) => {
  Task.setStatus(req.params.id, "done").then(() => {
    Task.find(req.params.id).then((task) => res.json(task));
  });
};

exports.delete = (req, res) => {
  Task.delete(req.params.id).then(() => {
    res.json({id : req.params.id});
  });
};


