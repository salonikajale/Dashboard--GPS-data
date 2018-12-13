'use strict'

exports.get_location = function(req, res) {
  res.json({"test": 1})
};

exports.view_map = function(req, res) {
  res.render('index')
}
