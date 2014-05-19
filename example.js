var Bitstamp = require('./Bitstamp');

var ws = new Bitstamp();
ws.on('trade', function(trade) {
  console.log('new trade:', trade);
});