const mongoose = require('../../config/mongoose'),
	  Schema = mongoose.Schema;

const schemas = {
	userSchema: new Schema({
		created: {type: Date, default: Date.now},
		name: {type: String},
		email: {type: String},
	})
};

module.exports = schemas;