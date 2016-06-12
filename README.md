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
    ws.on('data', function(data) {
      console.log('new order book event:', data);
    });

And check out the example in `example.js` for full configuration and all available channels.

## Reference

Bitstamp WebSocket API documentation: https://www.bitstamp.net/websocket/
