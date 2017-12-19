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
      diff_order_book_xrpbtc: false,
      
      // LTC/USD market:
      live_trades_ltcusd: false,
      order_book_ltcusdc: false,
      diff_order_book_ltcusd: false,
      
      // LTC/EUR market:
      live_trades_ltceur: false,
      order_book_ltceur: false,
      diff_order_book_ltceur: false,
      
      // LTC/BTC market:
      live_trades_ltcbtc: false,
      order_book_ltcbtc: false,
      diff_order_book_ltcbtc: false,
      
      // ETH/USD market:
      live_trades_ethusd: false,
      order_book_ethusd: false,
      diff_order_book_ethusd: false,
      
      // ETH/EUR market:
      live_trades_etheur: false,
      order_book_etheur: false,
      diff_order_book_etheur: false,
      
      // ETH/BTC market:
      live_trades_ethbtc: false,
      order_book_ethbtc: false,
      diff_order_book_ethbtc: false,

      // BCH/USD market:
      live_trades_bchusd: false,
      order_book_bchusd: false,
      diff_order_book_bchusd: false,

      // BCH/EUR market:
      live_trades_bcheur: false,
      order_book_bcheur: false,
      diff_order_book_bcheur: false,

      // BCH/BTC market:
      live_trades_btceur: false,
      order_book_btceur: false,
      diff_order_book_btceur: false
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
    this.client.subscribe('live_trades_xrpbtc');
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
  
  //LTC/USD events
  if(this.opts.live_trades_ltcusd) {
    this.client.subscribe('live_trades_ltcusd');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_ltcusd) {
    this.client.subscribe('order_book_ltcusd');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_ltcusd) {
    this.client.subscribe('diff_order_book_ltcusd');
    this.client.bind('data', this.broadcast('data'));
  }
  
  //LTC/EUR events
  if(this.opts.live_trades_ltceur) {
    this.client.subscribe('live_trades_ltceur');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_ltceur) {
    this.client.subscribe('order_book_ltceur');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_ltceur) {
    this.client.subscribe('diff_order_book_ltceur');
    this.client.bind('data', this.broadcast('data'));
  }
  
  //LTC/BTC events
  if(this.opts.live_trades_ltcbtc) {
    this.client.subscribe('live_trades_ltcbtc');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_ltcbtc) {
    this.client.subscribe('order_book_ltcbtc');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_ltcbtc) {
    this.client.subscribe('diff_order_book_ltcbtc');
    this.client.bind('data', this.broadcast('data'));
  }
  
  //ETH/USD events
  if(this.opts.live_trades_ethusd) {
    this.client.subscribe('live_trades_ethusd');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_ethusd) {
    this.client.subscribe('order_book_ethusd');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_ethusd) {
    this.client.subscribe('diff_order_book_ethusd');
    this.client.bind('data', this.broadcast('data'));
  }
  
  //ETH/EUR events
  if(this.opts.live_trades_etheur) {
    this.client.subscribe('live_trades_etheur');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_etheur) {
    this.client.subscribe('order_book_etheur');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_etheur) {
    this.client.subscribe('diff_order_book_etheur');
    this.client.bind('data', this.broadcast('data'));
  }
  
  //ETH/BTC events
  if(this.opts.live_trades_ethbtc) {
    this.client.subscribe('live_trades_ethbtc');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_ethbtc) {
    this.client.subscribe('order_book_ethbtc');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_ethbtc) {
    this.client.subscribe('diff_order_book_ethbtc');
    this.client.bind('data', this.broadcast('data'));
  }

  //BCH/USD events
  if(this.opts.live_trades_bchusd) {
    this.client.subscribe('live_trades_bchusd');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_bchusd) {
    this.client.subscribe('order_book_bchusd');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_bchusd) {
    this.client.subscribe('diff_order_book_bchusd');
    this.client.bind('data', this.broadcast('data'));
  }

  //BCH/EUR events
  if(this.opts.live_trades_bcheur) {
    this.client.subscribe('live_trades_bcheur');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_bcheur) {
    this.client.subscribe('order_book_bcheur');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_bcheur) {
    this.client.subscribe('diff_order_book_bcheur');
    this.client.bind('data', this.broadcast('data'));
  }

  //BCH/BTC events
  if(this.opts.live_trades_bchbtc) {
    this.client.subscribe('live_trades_bchbtc');
    this.client.bind('trade', this.broadcast('trade'));
  }
  if(this.opts.order_book_bchbtc) {
    this.client.subscribe('order_book_bchbtc');
    this.client.bind('data', this.broadcast('data'));
  }
  if(this.opts.diff_order_book_bchbtc) {
    this.client.subscribe('diff_order_book_bchbtc');
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
