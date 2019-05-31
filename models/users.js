const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
	username: {
		type: String,
		index: true,
		unique: true,
		dropDups: true,
		required: true,
	},
	passwordHash: { 
		type: String,
		required: true,
	},
}, {
	toJSON: {
		virtuals: true,
		transform: function (doc, ret) {
			delete ret._id;
			delete ret.__v;
		}
	}
});

const User = mongoose.model('User', UsersSchema);
module.exports = User;