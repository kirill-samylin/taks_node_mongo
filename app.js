const mongoose = require('mongoose');
const { getData } = require('./modules/getData');
const { newCollection } = require('./modules/newCollection');
const { insertCollection } = require('./modules/insertCollection');

const First = require('./models/first');
const Second = require('./models/second');
const Last = require('./models/collection');

const firstDocument = 'first.json';
const secondDocument = 'second.json';

mongoose.connect('mongodb://localhost:27017/task', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => {
    Promise.all([First.countDocuments(), Second.countDocuments(), Last.countDocuments(), getData(firstDocument), getData(secondDocument)])
      .then(([firstCountDocuments, secondCountDocuments, lastCountDocuments, first, second]) => {
        if (!firstCountDocuments) insertCollection(firstDocument, First, first);
        if (!secondCountDocuments) insertCollection(secondDocument, Second, second);
        if (!lastCountDocuments) {
          const collection = newCollection(first, second);
          insertCollection('newCollection', Last, collection);
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => {
    console.log(err);
  });