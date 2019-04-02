const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
});

UserSchema.set('toJSON', {
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.__v;
	}
});

const User = mongoose.model('User', UserSchema);

module.exports = User