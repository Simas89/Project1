const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	isOnline: { type: Date, default: Date.now },
	userName: { type: String, required: true },
	userName_tlc: String,
	userPsw: String,
	dateJoined: Date,
	email: { type: String, default: "" },
	verified: { type: Boolean, default: false },
	credits: Number,
	items: [
		{
			id: Number,
			amount: Number,
		},
	],
	contacts: {
		type: mongoose.Schema.ObjectId,
		ref: "ContactsList",
	},
	notifications: {
		type: mongoose.Schema.ObjectId,
		ref: "NotificationsList",
	},
	imgmicro: { type: mongoose.Schema.ObjectId, ref: "ProfileImgMicro" },
	imgsmall: { type: mongoose.Schema.ObjectId, ref: "ProfileImgSmall" },
	imgbig: { type: mongoose.Schema.ObjectId, ref: "ProfileImgBig" },
	settings: {
		showOnline: { type: Boolean, default: true },
	},
	loginCounter: { type: Number, default: 0 },
});

module.exports = mongoose.model("UserModel", userSchema);
