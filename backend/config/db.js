const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ats_resume_analyzer',
    password: 'Kashish123',
    port: 5432,
});

module.exports = pool;