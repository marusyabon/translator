const mongoose = require('mongoose');
const { Schema } = mongoose;

const TranslationsSchema = new Schema({
	word: String,
	wordId: {type: Schema.Types.ObjectId, ref: "Word"}, 
	languageId: {type: Schema.Types.ObjectId, ref: "Language"}
});

TranslationsSchema.set('toJSON', {
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.__v;
	}
});

const Translation = mongoose.model('Translation', TranslationsSchema);
module.exports = Translation;