// models/Task.js
const db = require('../config/db');

class Task {
  static create(taskData, callback) {
    const query = 'INSERT INTO tasks SET ?';
    db.query(query, taskData, callback);
  }

  static getAll(callback) {
    const query = 'SELECT * FROM tasks';
    db.query(query, callback);
  }

  static getById(id, callback) {
    const query = 'SELECT * FROM tasks WHERE id = ?';
    db.query(query, [id], callback);
  }

  static update(id, taskData, callback) {
    const query = 'UPDATE tasks SET ? WHERE id = ?';
    db.query(query, [taskData, id], callback);
  }

  static delete(id, callback) {
    const query = 'DELETE FROM tasks WHERE id = ?';
    db.query(query, [id], callback);
  }
}

module.exports = Task;
