require('http').createServer(function (req, res) {
  res.end('<%= message %>');
}).listen(3000);
