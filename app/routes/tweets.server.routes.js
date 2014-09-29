'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var tweets = require('../../app/controllers/tweets');

	// Tweets Routes
	app.route('/tweets')
		.get(tweets.list)
		.post(users.requiresLogin, tweets.create);

	app.route('/tweets/:tweetId')
		.get(tweets.read)
		.put(users.requiresLogin, tweets.hasAuthorization, tweets.update)
		.delete(users.requiresLogin, tweets.hasAuthorization, tweets.delete);

	// Finish by binding the Tweet middleware
	app.param('tweetId', tweets.tweetByID);
};