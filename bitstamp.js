// var Pusher = require('pusher-node-client').PusherClient;
var Pusher = require('pusher-js/node');

var BITSTAMP_PUSHER_KEY = 'de504dc5763aeef9ff52';

var Bitstamp = function(opts) {
  if (opts) {
    this.opts = opts;
  }
  else {
    this.opts = {
      encrypted: true,
      live_trades: true,
      order_book: true,
      diff_order_book: true
    };
  }

  this.client = new Pusher(BITSTAMP_PUSHER_KEY, {
      encrypted: this.opts.encrypted
  });

  this.subscribe();
}

var util = require('util');
var EventEmitter = require('events').EventEmitter;
util.inherits(Bitstamp, EventEmitter);

Bitstamp.prototype.subscribe = function() {
  if(this.opts.live_trades) {
    this.client.subscribe('live_trades');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book) {
    this.client.subscribe('order_book');
    this.client.bind('data', this.broadcast('order_book'));
  }
  if(this.opts.diff_order_book) {
    this.client.subscribe('diff_order_book');
    this.client.bind('data', this.broadcast('diff_order_book'));
  }
};

Bitstamp.prototype.broadcast = function(name) {
  return function(e) {
    this.emit(name, e)
  }.bind(this);
};


// new Bitstamp;

module.exports = Bitstamp;
