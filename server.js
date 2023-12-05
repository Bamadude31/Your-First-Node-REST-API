require('dotenv').config();
const express = require('express')
const app = express()

const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:password@localhost:5432/subscribers');

// Example query
// db.query(`
//   CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL
//   )
// `)
//   .then(() => {
//     console.log('Users table created');
//   })
//   .catch(error => {
//     console.error('Error creating users table', error);
//   });

// db.query('SELECT * FROM users')
//   .then(data => {
//     console.log(data)
//     console.log("Connected to Database");
//   })
//   .catch(error => {
//     console.error('Error executing query', error);
//   });


app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(8082, () => console.log('Server Started'))