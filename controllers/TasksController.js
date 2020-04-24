const Task = require('../models/Task');

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    if(req.xhr || req.headers.accept.indexOf("json") > -1){
      Task.find(id).then((task) => res.json(task));
    } else {
      res.redirect("/");
    }
  });
}

exports.markAsDone = (req, res) => {
  Task.setStatus(req.params.id, "done").then(() => {
    if(req.xhr || req.headers.accept.indexOf("json") > -1){
      Task.find(req.params.id).then((task) => res.json(task));
    }  else {
      res.redirect('/');
    }
  });
}

exports.delete = (req, res) => {
  Task.delete(req.params.id).then(() => {
    if(req.xhr || req.headers.accept.indexOf("json") > -1){
      res.json({id : req.params.id});
    }  else {
      res.redirect('/');
    }
  });
}


