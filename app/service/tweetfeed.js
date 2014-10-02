'use strict';
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
      'locations': '-122.75,36.8,-121.75,37.8,-74,40,-73,41'
    },
    function (stream) {
      stream.on('data', function (tweet) {
        db.collection('tweets', function (err, collection) {
          collection.insert(tweet);
          console.log(tweet);
        });
      });
    })
});