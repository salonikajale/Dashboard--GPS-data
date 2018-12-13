'use strict';
module.exports = function(app) {
  var mapsCtrl = require('../controllers/mapsController');

  // todoList Routes
  app.route('/getLocation')
    .get(mapsCtrl.get_location)

  app.route('/viewMap')
    .get(mapsCtrl.view_map)
  //
  //
  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};
