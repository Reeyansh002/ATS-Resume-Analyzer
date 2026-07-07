const express = require('express');
const cors = require('cors');
const pool = require('./config/db.js'); // it connects server.js to db.js

const app = express(); //This creates server application

app.use(cors()); //This enables Resource Sharing between frontend and backend
app.use(express.json()); //It tells the express whenever clint send the json data convert it into javascript object

app.get('/', async (req,res) =>{
    try {
        const result = await pool.query('Select Now()');
        res.json({
            message: 'Database Connected',
            time: result.rows[0]
        });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});


app.listen(5000,()=>{
    console.log('Server running on the port 5000');
    
});