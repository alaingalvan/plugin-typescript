var hs = require("http-server");
var open = require('open');
var chokidar = require('chokidar-socket-emitter');
var server = hs.createServer({ "root": process.cwd(), cache: -1 });
chokidar({ app: server.server, relativeTo: process.cwd(), dir: process.cwd(), path: process.cwd() });
server.listen(8080);
open("http://127.0.0.1:8080");
