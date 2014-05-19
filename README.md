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

Checkout `bitstamp-ws/example.js` for an example.