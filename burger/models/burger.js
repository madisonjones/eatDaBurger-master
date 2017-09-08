var orm = require("../config/orm.js");

var burgers = {
  addBurger: function(nameInput, cb){
    orm.insertOne("burgers", nameInput, cb);
  },
  devourBurger: function(inputId, cb){
    orm.updateOne("burgers", inputId, cb);
  },
  findAll: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },
  removeBurger: function(cb) {
    orm.removeOne("burgers", inputId, cb)
  }

};

module.exports = burgers;