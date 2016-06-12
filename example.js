var Bitstamp = require('./Bitstamp');

var ws = new Bitstamp({
  // force encrypted socket session
  encrypted: true,

  // BTC/USD market:
  live_trades: true,
  order_book: false,
  diff_order_book: false,

  // BTC/EUR market:
  live_trades_btceur: false,
  order_book_btceur: false,
  diff_order_book_btceur: false
});

console.log('listening to new trades..');

ws.on('trade', function(trade) {
  console.log('new trade:', trade);
});


// if you enabeld `order_book` and/or `diff_order_book`

ws.on('data', function(data) {
  console.log('new order book event:', data);
});


// if you enabeld `live_trades_btceur`, `order_book_btceur` and/or `diff_order_book_btceur`

// ws.on('trade', function(data) {
//   console.log('new trade:', data);
// });
// ws.on('data', function(data) {
//   console.log('new order book event:', data);
// });
