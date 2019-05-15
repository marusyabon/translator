const mongoose = require('mongoose');
const { Schema } = mongoose;

const LanguagesSchema = new Schema({
	value: String
}, {
	toJSON: {
		virtuals: true,
		transform: function (doc, ret) {
			delete ret._id;
			delete ret.__v;
		}
	}
});

const Language = mongoose.model('Language', LanguagesSchema);
module.exports = Language;