const express = require('express');
const app = express();
const http = require('http').Server(app);
const expressLayouts = require('express-ejs-layouts');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('layout', 'layout');
app.set('layout extractScripts', true);

app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/axios/dist'));

const route = require('./routes/route');
const contentRoute = require('./routes/contentRoute');

app.use('/', route);
app.use('/content', contentRoute);

http.listen(5545, () => {
    console.log(`http server start`);
});
