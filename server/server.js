
const express = require('express')
const { connection } = require('./infra/database/connection');
const PeopleRepository = require('./repository/people');

require('dotenv').config()
 
const app = express()

const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
  const repository = PeopleRepository(connection);

  const peopleName = req.query.name;

  if (peopleName) {
    await repository.create(peopleName);
  }

  const peoplesList = await repository.list();

  const peoplesText = peoplesList.map(people => people.name).join(', <br/>');

  return res.send(`Welcome! List of users in database (${peoplesList.length}) <br/> ${peoplesText}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
