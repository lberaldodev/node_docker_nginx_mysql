
const express = require('express')
const { connection } = require('./infra/database/connection');

require('dotenv').config()
 
const app = express()

const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
  const peopleRepository = require('./repository/people');
  const peopleName = req.query.name || 'John Doe'
  await peopleRepository(connection).create(peopleName);
  return res.send(`Hello World! ${peopleName}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
