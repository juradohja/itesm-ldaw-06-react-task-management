const router = require('express').Router();
const tasksController = require('../controllers/TasksController');

router.get('/tasks', tasksController.getTasks);

router.post('/tasks', tasksController.store);

router.put('/done/:id', tasksController.markAsDone);

router.delete('/delete/:id', tasksController.delete);

module.exports = router;
