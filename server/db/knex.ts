const knexInstance = require('knex');

const connectedKnex = knexInstance({
  client: 'sqlite3',
  connection: {
    filename: 'vignette.sqlite3',
  },
});

module.exports = connectedKnex;
