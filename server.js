require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:password@localhost:5432/postgres');
const knexConfig = require('./knexfile.js');
const knex = require('knex')(knexConfig);

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/',(request,response) => {
  response.send('Application is up and running')
})

app.get('/items',(request,response) =>{
  knex('items')
    .select('*')
    .then(data => {
      var itemNames = data.map(items => items.Item_Name)
      response.json(itemNames);
    })
})


app.get('/route/items', function(req, res) {
  knex.raw('SELECT * FROM items').then(function(users) {
    res.send(users.rows);
  });
});


const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const itemsRouter = require('./routes/items')
app.use('/items', itemsRouter)


app.listen(8082, () => console.log('Server Started'))

//--------------------------------------
// Example query for Users table
//
// db.query(`
//   CREATE TABLE Users (
//     id SERIAL PRIMARY KEY,
//     first_name VARCHAR(255) NOT NULL,
//     last_name VARCHAR(255) NOT NULL,
//     username VARCHAR(255) NOT NULL,
//     password VARCHAR(255) NOT NULL);
// //   );
//--------------------------------------
// Example query for items table
//db.query('
    // CREATE TABLE items (
    //   id SERIAL PRIMARY KEY,
    //   UserId INTEGER NOT NULL,
    //   Item_Name VARCHAR(255) NOT NULL,
    //   Description VARCHAR(255) NOT NULL,
    //   Quality INTEGER NOT NULL
    // );


// // `)
//   .then(() => {
//     console.log('eshop table created');
//   })
//   .catch(error => {
//     console.error('Error creating eshop table', error);
//   });

// db.query('SELECT * FROM eshop')
//   .then(data => {
//     console.log(data)
//     console.log("Connected to Database");
//   })
//   .catch(error => {
//     console.error('Error executing query', error);
//   });



