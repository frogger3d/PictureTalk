(function (data) {

  var seedData = require('./seedData.js');

  data.getPages = function (next) {
    next(null, seedData.initialPages);
  };
})(module.exports);
