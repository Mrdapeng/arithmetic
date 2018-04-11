var queryString = require('querystring')
var http = require('http')
var server = http.createServer()

server.on('request', function (req, res) {
    var params = queryString.parse(req.url.split('?')[1])
    var fn = params.callback
    res.response(200,{'Content-Type':'text/javascript'})
    res.write(fn+'('+JSON.stringify(params)+')')
    res.end()
})
server.listen('8000')
console.log('server is running at port 8080')
