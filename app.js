const PORT = 3000;
const fetch = require('node-fetch');

var express = require('express')
// var cors = require('cors')
var app = express()


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.text({ type: 'text/plain' }))
//https://github.com/expressjs/express/wiki#template-engines
app.set('view engine', 'ejs')



// var corsOptions = {
//   origin: "http://app.linkedin-reach.io",
//   // origin: 'http://example.com',
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   origin: true
// }


// var corsOptions = {
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204
// }

// app.use(cors(corsOptions))

app.get('/', function (req, res, next) {

  // res.send(express.static('../index.html'))
  console.log("hit")
  fetch('http://app.linkedin-reach.io/words')
    .then(res => res.text())
    .then(body => 
    	res.render("index", {word_data: body}));
  
});

// you had this before the app.get('/') route, so it went to send static file first
app.use('/',  express.static('views'));//rendering static html

app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 3000')
});