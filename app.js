const PORT = 3000;

var express = require('express')
var cors = require('cors')
var app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.text({ type: 'text/plain' }))

app.use('/', express.static('views'));//rendering static html

var corsOptions = {
  origin: "http://app.linkedin-reach.io/words",
  // origin: 'http://example.com',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  origin: true
}

app.get('/', cors(corsOptions), function (req, res, next) {

  // res.send(express.static('../index.html'))
  res.render()
});

app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 80')
});