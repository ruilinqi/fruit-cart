// load .env data into process.env
require('dotenv').config();

// cookieParser
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session');

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
app.use(cookieSession({
  name: 'session',
  keys: ['key', 'key2'],
  maxAge: 24 * 60 * 60 * 1000
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const fruitRoutes = require('./routes/fruit-card');
const favouritesRoutes = require('./routes/favourites');
const shoppingListsRoutes = require('./routes/shopping_list');
const sellRoutes = require('./routes/sell');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const signupRoutes = require('./routes/signup');
const contactRoutes = require('./routes/contact');
// const sortByRoutes = require('./routes/sort_by');

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
app.use('/', loginRoutes);
app.use('/', logoutRoutes);
app.use('/', signupRoutes);
app.use('/', contactRoutes);
// app.use('/', sortByRoutes);


// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  const userID = req.session.user_id;

  console.log("REQ.SESSION AT / route: ",req.session);



  let queryString = `SELECT DISTINCT fruits.*, users.id as user_id,
  users.name as seller, users.email, users.phone,
  (SELECT id FROM favourites WHERE user_id = $1 AND fruit_id = fruits.id LIMIT 1) AS isfavourite,
  (SELECT id FROM shopping_list WHERE user_id = $1 AND fruit_id = fruits.id LIMIT 1) AS isshop
  FROM fruits
  JOIN users ON fruits.owner_id = users.id
  ORDER BY `;
  let sortType = req.query.sortType;
  let sortBy = "fruits.price;";

  if (sortType === "highPrice") {
    console.log("highPrice");
    sortBy = "fruits.price DESC;";
  }
  if (sortType === "lowPrice") {
    console.log("lowPrice");
    sortBy = "fruits.price ASC;";
  }
  if (sortType === "newPost") {
    console.log("newPost");
    sortBy = "fruits.list_time ASC;";
  }
  if (sortType === "oldPost") {
    console.log("oldPost");
    sortBy = "fruits.list_time DESC;";
  }

  queryString += sortBy;
  // console.log(queryString);


  let templateVars = { user: [{}] };

  // Query to select info about the currently logged in user.
  if (req.session.user_id) {
    let usersQuery = `SELECT isadmin FROM users WHERE id = ${req.session.user_id};`;
    db.query(usersQuery)
    .then(data => {
      templateVars.user = data.rows;
    })
    .catch(err => {
      console.log(err);
    });
  }


  db.query(queryString, [userID])
  .then(data => {
    //const templateVars = { fruits: data.rows }
    templateVars.fruits = data.rows;

    console.log("templateVars: ",templateVars);
    res.render("index", templateVars);
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
