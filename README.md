# bitstamp-ws

Nodejs Wrapper for the Bitstamp WebSocket API.

## Howto

Install:

    npm install bitstamp-ws

Use:

    var Bitstamp = require('bitstamp-ws');

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

This is example is in `example.js`.

## Channels

By default, `trade`, `order_book`, and `diff_order_book` are all enabled. To specify
subscriptions, pass an options object when during setup.

For example, to subscribe to `live_trades` only:

    var ws = new Bitstamp({ live_trades: true });
    ws.on('trade', function(trade) {
      console.log('new trade:', trade);
    });

To subscribe to `order_book` and `diff_order_book` only:

    var ws = new Bitstamp({ order_book: true, diff_order_book: true });
    ws.on('order_book', function(data) {
      console.log('new order book:', data);
    });
    ws.on('diff_order_book', function(data) {
      console.log('new order book diff:', data);
    });

Note that `order_book` updates only contain the top 20 bids and top 20 asks.

## Reference

Bitstamp WebSocket API documentation: https://www.bitstamp.net/websocket/
