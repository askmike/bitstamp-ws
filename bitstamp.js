var Pusher = require('pusher-js/node');

var BITSTAMP_PUSHER_KEY = 'de504dc5763aeef9ff52';

var Bitstamp = function(opts) {
  if (opts) {
    this.opts = opts;
  }
  else {
    this.opts = {
      // force encrypted socket session
      encrypted: true,
      
      // BTC/USD market:
      live_trades: true,
      order_book: true,
      diff_order_book: true,

      // BTC/EUR market:
      live_trades_btceur: false,
      order_book_btceur: false,
      diff_order_book_btceur: false,
      
      // EUR/USD market:
      live_trades_eurusd: false,
      order_book_eurusd: false,
      diff_order_book_eurusd: false,
      
      // XRP/USD market:
      live_trades_xrpusd: false,
      order_book_xrpusd: false,
      diff_order_book_xrpusd: false,
      
      // XRP/EUR market:
      live_trades_xrpeur: false,
      order_book_xrpeur: false,
      diff_order_book_xrpeur: false,
      
      // XRP/BTC market:
      live_trades_xrpbtc: false,
      order_book_xrpbtc: false,
      diff_order_book_xrpbtc: false
    };
  }

  this.client = new Pusher(BITSTAMP_PUSHER_KEY, {
      encrypted: this.opts.encrypted
  });


  // bitstamp publishes all data over just 2 channels
  // make sure we only subscribe to each channel once
  this.bound = {
    trade: false,
    data: false
  }

  this.subscribe();
}

var util = require('util');
var EventEmitter = require('events').EventEmitter;
util.inherits(Bitstamp, EventEmitter);

Bitstamp.prototype.subscribe = function() {

  // BTC/USD events
  if(this.opts.live_trades) {
    this.client.subscribe('live_trades');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book) {
    this.client.subscribe('order_book');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book) {
    this.client.subscribe('diff_order_book');
    this.client.bind('data', this.broadcast('data'));
  }

  // BTC/EUR events
  if(this.opts.live_trades_btceur) {
    this.client.subscribe('live_trades_btceur');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_btceur) {
    this.client.subscribe('order_book_btceur');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_btceur) {
    this.client.subscribe('diff_order_book_btceur');
    this.client.bind('data', this.broadcast('data'));
  }
  
  // EUR/USD events
  if(this.opts.live_trades_eurusd) {
    this.client.subscribe('live_trades_eurusd');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_eurusd) {
    this.client.subscribe('order_book_eurusd');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_eurusd) {
    this.client.subscribe('diff_order_book_eurusd');
    this.client.bind('data', this.broadcast('data'));
  }
  
  // XRP/USD events
  if(this.opts.live_trades_xrpusd) {
    this.client.subscribe('live_trades_xrpusd');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_xrpusd) {
    this.client.subscribe('order_book_xrpusd');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_xrpusd) {
    this.client.subscribe('diff_order_book_xrpusd');
    this.client.bind('data', this.broadcast('data'));
  }
  
  // XRP/EUR events
  if(this.opts.live_trades_xrpeur) {
    this.client.subscribe('live_trades_xrpeur');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_xrpeur) {
    this.client.subscribe('order_book_xrpeur');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_xrpeur) {
    this.client.subscribe('diff_order_book_xrpeur');
    this.client.bind('data', this.broadcast('data'));
  }
  
  // XRP/BTC events
  if(this.opts.live_trades_xrpbtc) {
    this.client.subscribe('live_trades_xrpxrpbtc');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_xrpbtc) {
    this.client.subscribe('order_book_xrpbtc');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_xrpbtc) {
    this.client.subscribe('diff_order_book_xrpbtc');
    this.client.bind('data', this.broadcast('data'));
  }
};

Bitstamp.prototype.broadcast = function(name) {
  if(this.bound[name])
    return function noop() {};

  this.bound[name] = true;

  return function(e) {
    this.emit(name, e)
  }.bind(this);
};

module.exports = Bitstamp;
