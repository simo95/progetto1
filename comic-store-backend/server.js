const express = require("express");
const {Pool} = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express;
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database: 'comic_store_db',
    password: '',
    port: 5432,
});

// Test database connection
pool.connect((err, client, done) => {
    if (err) {
        console.error('Database connection error:', err.stack);
        return;
    }
    console.log('Connected to PostgreSQL database!');
    done();
});

// API endpoint for saving employee data
app.post('/api/employees', async (req, res) => {
    const { nome, cognome, ArticoliVenduti, nomeNeg, fumetto, frase } = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO employees (first_name, last_name, articles_sold, store_name, favorite_comic, motivational_phrase)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [nome, cognome, ArticoliVenduti, nomeNeg, fumetto, frase]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error saving employee data:', err);
        res.status(500).send('Server error');
    }
});

// API endpoint for saving comic data
app.post('/api/comics', async (req, res) => {
    const { nomeFumetto, nomeAutore } = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO comics (comic_name, author_name)
             VALUES ($1, $2) RETURNING *`,
            [nomeFumetto, nomeAutore]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error saving comic data:', err);
        res.status(500).send('Server error');
    }
});

// API endpoint for getting all comics
app.get('/api/comics', async (req, res) => {
    try {
        const result = await pool.query('SELECT comic_name FROM comics');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Error fetching comics:', err);
        res.status(500).send('Server error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});