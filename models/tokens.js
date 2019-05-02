const mongoose = require('mongoose');

const { Schema } = mongoose;

const TokensSchema = new Schema({
	currentDate: Date,
	invalidToken: Object
});

mongoose.model('Tokens', TokensSchema);
