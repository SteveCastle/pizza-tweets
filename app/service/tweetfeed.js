'use strict';

var express = require('express');
var app = express();
var server = app.listen(9000);
var io = require('socket.io').listen(server);


var twitter = require('ntwitter'),
  credentials = require('../../config/credentials.js');
var t = new twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret
});

var mongo = require('mongodb');

var Server = mongo.Server,
  Db = mongo.Db,
  assert = require('assert'),
  BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {
    auto_reconnect: true
}),
  db = new Db('stream', server);
// open db
db.open(function (err, db) {
    assert.equal(null, err);
    t.stream('statuses/filter', {
        'track': 'pizza',
    },
    function (stream) {
        stream.on('data', function (tweet) {
            if (tweet.geo == null) {return ;}
            console.log(tweet);
            //Create message containing tweet + username + profile pic + location
            var msg = {};
            msg.id = tweet.id;
            msg.text = tweet.text;
            msg.geo = tweet.geo.coordinates;
            msg.user = {
                name: tweet.user.name,
                image: tweet.user.profile_image_url
            };
            io.sockets.emit('tweet', msg);
            db.collection('tweets', function (err, collection) {
                collection.insert(tweet);
                console.log(tweet);
            });
        });
    });
});