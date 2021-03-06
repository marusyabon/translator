const mongoose = require('mongoose');
const { Schema } = mongoose;

const TokensSchema = new Schema({
	currentDate: Date,
	invalidToken: Object
}, {
	toJSON: {
		virtuals: true,
		transform: function (doc, ret) {
			delete ret._id;
			delete ret.__v;
		}
	}
});

const Token = mongoose.model('Token', TokensSchema);
module.exports = Token;