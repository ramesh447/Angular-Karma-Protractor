/**
 * Created by rajender on 20/07/16.
 */
//http://code.runnable.com/VCOwg1sFidxMyYxV/angularjs-basic-example-for-express-node-js-and-angular-js
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res){
    res.redirect('/index.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
