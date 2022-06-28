module.exports = (connection) => {
  return {
    create: (name) => {
      return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO people(name) values('${name}');`, (err, results) => {
          if (err) {
            reject(err)
          } else {
            resolve(results)
          }
        })
      })
    }
  }
}