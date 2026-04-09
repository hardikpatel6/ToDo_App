// getting-started.js
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/MyraTechnoLabDB');
}

main()
    .then(() => console.log('Database connection successful'))
    .catch(err => console.log(err));

module.exports = main;