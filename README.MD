# WebSocket+TLS tests

## Usage

Run `python3 -m http.server` for a HTTP server accessible at `http://localhost:8000/index.html`.

Run `python3 server.py` for a HTTPS server accessible at `http://localhost:8443/index.html`. (Generate `cert.pem` and `key.pem` with `openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365`.)

### Results
- HTTP -> WS :heavy_check_mark:
- HTTP -> WSS :heavy_check_mark:
- HTTPS -> WS :heavy_multiplication_x:
- HTTPS -> WSS :heavy_check_mark:

## Acknowledgements
Depends on https://www.wss-websocket.net/ for providing ws:// and wss:// echo WebSockets.

Code based on https://github.com/heroku-examples/python-websockets-chat.
