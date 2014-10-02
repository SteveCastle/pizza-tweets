'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Tweet Schema
 */
var TweetSchema = new Schema({
	name: {
		type: String,
		default: ''
	},
	mentions: [{}],

	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: String,
		default: ''
	}
});

mongoose.model('Tweet', TweetSchema);