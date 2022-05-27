// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// all environments
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());

// add views types and path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// include ROUTES & APIs
const routes = require('./routes/router');
const api = require('./routes/api');

app.use('/', routes);
app.use('/api',api);


console.log('http://localhost:3000');
app.listen(3000);
