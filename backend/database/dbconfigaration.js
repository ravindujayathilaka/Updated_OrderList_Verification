const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "ravindu123",
    host: "localhost",
    post: 5432,
    database: "orderlistdb" 
});

module.exports = pool;