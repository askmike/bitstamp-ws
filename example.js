var Bitstamp = require('./Bitstamp');

var ws = new Bitstamp();
ws.on('trade', function(trade) {
  console.log('new trade:', trade);
});
ws.on('order_book', function(data) {
  console.log('new order book:', data);
});
ws.on('diff_order_book', function(data) {
  console.log('new order book diff:', data);
});
