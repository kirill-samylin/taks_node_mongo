module.exports.insertCollection = (name, collection, arr) => {
  collection.insertMany(arr)
    .then(() => console.log(`insert ${name} collection`))
    .catch((err) => console.log(err));
};