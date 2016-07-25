const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pagination');

module.exports = mongoose;