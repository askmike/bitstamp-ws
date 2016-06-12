var Bitstamp = require('./Bitstamp');

var ws = new Bitstamp({
  // force encrypted socket session
  encrypted: true,

  // BTC/USD market:
  live_trades: true,
  order_book: true,
  diff_order_book: true,

  // BTC/EUR market:
  live_trades_btceur: false,
  order_book_btceur: false,
  diff_order_book_btceur: false
});

// if you enabeld `live_trades` or `live_trades_btceur`

console.log('listening to new trades..');
ws.on('trade', function(trade) {
  console.log('new trade:', trade);
});


// if you enabeld `order_book`, `diff_order_book`,
// `order_book_btceur` and/or `diff_order_book_btceur`.

console.log('listening to new order book events..');
ws.on('data', function(data) {
  console.log('new order book event:', data);
});
