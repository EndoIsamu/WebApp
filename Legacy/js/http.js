var port = 9000;
var html = require('fs').readFileSync("C:\\xampp\\htdocs\\WebApp" + '/hand.html'); // 任意のHTMLファイル
var server = require('http').createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': html.length});
  res.end(html);
}).listen(port);