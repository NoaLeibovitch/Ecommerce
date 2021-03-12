const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getUserByUserName = (request, response) => {
  const { id } = request.params;
  pool.query('SELECT * FROM users WHERE id=$1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const logInUser = (request, response) => {
  const { username, password } = request.body;
  pool.query('SELECT * FROM users WHERE username=$1 AND password=$2', [username,password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { firstname, lastname, email, username, password } = request.body
  console.log('request.body: ');
  console.log(request.body);
  pool.query('INSERT INTO users (firstname, lastname, email, username, password) VALUES ($1, $2, $3, $4, $5)', [firstname, lastname, email, username, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const getProducts = (request, response) => {
  pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers,
  createUser,
  logInUser,
  getProducts,
  getUserByUserName
}