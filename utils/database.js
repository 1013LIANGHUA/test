const { Pool } = require('pg');

// set production variable. This will be called when deployed to a live host
const isProduction = process.env.NODE_ENV === 'production';

let pool;

if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_36',
    password: '0000',
    port: '5432',
  });
}

// pool.query('SELECT * from category_xx', (err, res) => {
//   console.log(JSON.stringify(res.rows));
//   pool.end();
// });

module.exports = pool;
