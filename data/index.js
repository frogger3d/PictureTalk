var seedData = require('./seedData');
function getData(next) {
    next(null, seedData.getSeed());
}
exports.getData = getData;
;
