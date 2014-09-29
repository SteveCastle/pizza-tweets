'use strict';

//Setting up route
angular.module('tweets').config(['$stateProvider',
	function($stateProvider) {
		// Tweets state routing
		$stateProvider.
		state('listTweets', {
			url: '/tweets',
			templateUrl: 'modules/tweets/views/list-tweets.client.view.html'
		}).
		state('createTweet', {
			url: '/tweets/create',
			templateUrl: 'modules/tweets/views/create-tweet.client.view.html'
		}).
		state('viewTweet', {
			url: '/tweets/:tweetId',
			templateUrl: 'modules/tweets/views/view-tweet.client.view.html'
		}).
		state('editTweet', {
			url: '/tweets/:tweetId/edit',
			templateUrl: 'modules/tweets/views/edit-tweet.client.view.html'
		});
	}
]);