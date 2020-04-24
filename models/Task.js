const knex = require('../database/connection');

exports.PENDING = 'pending';
exports.DONE = 'done';


exports.all = () => {
  return knex
    .select('*')
    .from('tasks');
}

exports.create = (task) => {
  return knex('tasks')
    .insert({ description: task.description });
}

exports.setStatus = (id, status) => {
  return knex('tasks')
    .where('id', id)
    .update({
      status: status
    })
}

exports.find = (id) => {
  return knex('tasks')
    .select("*")
    .where("id", id)
    .first();
}

exports.delete = (id) => {
  return knex('tasks')
    .where("id", id)
    .del();
}
