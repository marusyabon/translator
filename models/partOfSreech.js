const mongoose = require('mongoose');
const { Schema } = mongoose;

const PartSchema = new Schema({
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

const partOfSpeech = mongoose.model('SpeechPart', PartSchema);
module.exports = partOfSpeech;