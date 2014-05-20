var Pusher = require('pusher-node-client').PusherClient;
var bindAll = require('lodash.bindall');

var Bitstamp = function() {
  bindAll(this);

  this.channel = null;
  this.client = new Pusher({
    key: 'de504dc5763aeef9ff52',
    appId: '',
    secret: ''
  });

  this.client.on('connect', this.subscribe);
  this.client.connect();
}

var util = require('util');
var EventEmitter = require('events').EventEmitter;
util.inherits(Bitstamp, EventEmitter);

Bitstamp.prototype.subscribe = function() {
  this.channel = this.client.subscribe("live_trades");
  this.channel.on('trade', this.handle);
};

Bitstamp.prototype.handle = function(e) {
  this.emit('trade', e);
};

module.exports = Bitstamp;