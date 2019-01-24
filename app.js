// ----------MODULE---------- //
const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');

// ----------SET ROUTES---------- //
const index = require('./routes/index');
const events = require('./routes/event');

const app = express();

// we no need views because we are just build an API
// ----------VIEW ENGINE---------- //
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// ----------SET STATIC FOLDER---------- //
// app.use(express.static(path.join(__dirname, 'client')));

// ----------USING BODY PARSER MIDDLEWARE---------- //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// ----------GET ROUTES---------- //
app.use('/', index);
app.use('/api/v1', events);


// ----------RUN THE SERVER---------- //
var port = process.env.PORT || 3000 //dynamic port, default port 3000 but u can change in your terminal just type 'export PORT=5000'
app.listen(port, function() {
    console.log(`listening on port ${port}...`) // TEMPLATE STRING ON ES6 / ES2015
})