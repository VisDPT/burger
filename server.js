//========== DEPENDENCIES!=====================
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

// override with POST haaving ?_method=DELETE

//method override
app.use(methodOverride('_method'));
//Handlebar stuff
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//root route
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


//Server: binds to port 3000
//var port = process.env.PORT || 3000;
var port = 3000;
//app.listen(port);


app.listen(port, function() {
    //if (err) throw err;
    console.log('listening on' + port)
});