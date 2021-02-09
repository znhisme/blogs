var DataTypes = require("sequelize").DataTypes;
var _article = require("./article");
var _users = require("./users");

function initModels(sequelize) {
  var article = _article(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    article,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
