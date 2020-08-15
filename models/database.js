const { Pool } = require('pg');

const PG_URI =
  'postgres://qquarylc:9f-WympV5l824vTHMGwyNrlOfAM572tk@raja.db.elephantsql.com:5432/qquarylc';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
