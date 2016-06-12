var Bitstamp = require('./Bitstamp');

var ws = new Bitstamp({
  encrypted: true,
  live_trades: true,
  order_book: false,
  diff_order_book: false
});

console.log('listening to new trades..');

ws.on('trade', function(trade) {
  console.log('new trade:', trade);
});


// if you enabeld order_book and/or diff_order_book

// ws.on('order_book', function(data) {
//   console.log('new order book:', data);
// });
// ws.on('diff_order_book', function(data) {
//   console.log('new order book diff:', data);
// });
