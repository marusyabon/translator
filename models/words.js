const mongoose = require('mongoose');
const { Schema } = mongoose;

const WordsSchema = new Schema({
	word: String,
	partOfSpeechId: {type: Schema.Types.ObjectId, ref: "SpeechPart"}, 
	groupId: {type: Schema.Types.ObjectId, ref: "Group"}, 
	languageId: {type: Schema.Types.ObjectId, ref: "Language"}
});

WordsSchema.set('toJSON', {
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.__v;
	}
});

const Word = mongoose.model('Word', WordsSchema);
module.exports = Word;