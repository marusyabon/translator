const mongoose = require('mongoose');
const { Schema } = mongoose;

const TestsSchema = new Schema({
	passedDate: Date,
	groupId: {type: Schema.Types.ObjectId, ref: "Group"},
	score: Number
});

TestsSchema.set('toJSON', {
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.__v;
	}
});

const TestResult = mongoose.model('TestResult', TestsSchema);
module.exports = TestResult;