// load .env data into process.env
require('dotenv').config();

// cookieParser
const cookieParser = require('cookie-parser')


// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
//const bodyParser = require("body-parser");


const PORT = process.env.PORT || 8080;
const app = express();

// PG database client/connection setup
const db = require('./db/connection');

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// For JSON
app.use(express.json());

app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

app.use(cookieParser());

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const fruitRoutes = require('./routes/fruit-card');
const favouritesRoutes = require('./routes/favourites');
const shoppingListsRoutes = require('./routes/shopping_list');
const sellRoutes = require('./routes/sell');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
//app.use('/', fruitRoutes(db));
app.use('/favourites', favouritesRoutes);
app.use('/shopping_cart', shoppingListsRoutes);
app.use('/', sellRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  db.query("SELECT * FROM fruits;")
  .then(data => {
    const templateVars = { fruits: data.rows }
    console.log(templateVars);
    res.render("index", templateVars);
  })
  .catch(err => {
    console.log("this is an error", err);
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
