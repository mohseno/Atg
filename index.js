var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/api/ddresults', function(req, res) {
  /* Process request, send response */
  var url = 'https://www.atg.se/services/v1/products/dd';
  const request = require('request');

  request(url, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const atgResponse = JSON.parse(body)
      res.send(atgResponse.results);
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode);
    }
  })

});

app.get('/api/ddresult/:id', function(req, res) {
  /* Process request, send response */
  var url = 'https://www.atg.se/services/v1/games/' + req.params.id;
  const request = require('request');

  request(url, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const atgResponse = JSON.parse(body)
      res.send(atgResponse.pools.dd.result);
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode);
    }
  })


});


app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
