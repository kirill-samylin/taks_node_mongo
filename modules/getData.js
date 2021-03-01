const path = require('path');
const fs = require('fs').promises;

module.exports.getData = (name) => {
  const file = path.join(__dirname, `../data/${name}`);
  return fs.readFile(file, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
};