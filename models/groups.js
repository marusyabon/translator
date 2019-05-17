const mongoose = require('mongoose');
const { Schema } = mongoose;

const GroupsSchema = new Schema({
	groupName: String,
	creationDate: Date,
	wordsCount: Number,
	userId: {type: Schema.Types.ObjectId, ref: "User"},
	isRemoved: Boolean
}, {
	toJSON: {
		virtuals: true,
		transform: function (doc, ret) {
			delete ret._id;
			delete ret.__v;
		}
	}
});

const Group = mongoose.model('Group', GroupsSchema);
module.exports = Group;