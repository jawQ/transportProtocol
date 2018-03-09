const express = require('express');
const path = require('path');
const http = require('http');
var jsonp = require('./interface/forjsonp.js')
const app = express();
app.set('port', process.env.PORT || 666);
app.use(express.static(path.join(__dirname, '/')))
app.get('/forjsonp', jsonp.forjsonp)
app.use('/', (request, response, next) => {
  response.write('Response from express');
  console.log('启动正常...')
  console.log(path.join(__dirname, 'public'))
  // next();
  response.end();
});
http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port http://localhost:" + app.get('port'));
})