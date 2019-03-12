var express = require('express');  
var fs = require('fs');
var app = express();
app.use(express.static('public'));

app.get('/data',function(req,res){
  fs.readFile('data.json', function(err, data) {
    if (err) {return console.log(err);
    }else
    {
    res.send(JSON.stringify(JSON.parse(data)));
    }
  });
});


var server = app.listen(5007, function () {  
  var host = server.address().address  
    var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
  })  