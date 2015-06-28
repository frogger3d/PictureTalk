import seedData = require('./seedData');

export function getData (next) {
  next(null, seedData.getSeed());
};
