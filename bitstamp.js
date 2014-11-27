var Pusher = require('pusher-node-client').PusherClient;
var bindAll = require('lodash.bindall');

var Bitstamp = function(opts) {
  bindAll(this);

  if (opts) {
    this.opts = opts;
  }
  else {
    this.opts = {
      live_trades: true,
      order_book: true,
      diff_order_book: true
    };
  }

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
  if ('live_trades' in this.opts && this.opts.live_trades) {
    this.client.subscribe('live_trades').on('trade', this.handleTrade);
  }
  if ('order_book' in this.opts && this.opts.order_book) {
    this.client.subscribe('order_book').on('data', this.handleOrderBook);
  }
  if ('diff_order_book' && this.opts.diff_order_book) {
    this.client.subscribe('diff_order_book').on('data', this.handleDiffOrderBook);
  }
};

Bitstamp.prototype.handleTrade = function(e) {
  this.emit('trade', e);
};

Bitstamp.prototype.handleOrderBook = function(e) {
  this.emit('order_book', e);
};

Bitstamp.prototype.handleDiffOrderBook = function(e) {
  this.emit('diff_order_book', e);
};

module.exports = Bitstamp;
