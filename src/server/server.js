import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import pg from 'pg'
import path from 'path'

dotenv.config();

const app = express();
app.use(cors());
const PORT = 3000;

const DB_URL = process.env.DATABASE_URL;
const RENBER_DB_URL = process.env.RENDER_DATABASE_URL;

const pool = new pg.Pool({
    connectionString : DB_URL
})

const pool2 = new pg.Pool({
    connectionString : RENBER_DB_URL,
    ssl: {
        rejectUnauthorized: false
    }
})
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'dist')))
// app.use(express.static('public'))
// app.use(express.static('dist'))

console.log("Connecting to postgres using : ", DB_URL)

app.get('/server', (req, res) => {
    pool2.query(`SELECT * FROM dogs`)
    .then((data) => {
        res.send(data.rows)
        console.log(data.rows)
    })
    .catch((err) => {
        console.error(err)
    })
})

app.get('/api/data', async (req, res) => {
    try {
        const response = await pool.query(`SELECT * FROM dogs`)
        res.json(response.rows)
    } catch (error) {
        console.error(error)
    }
})

// get all the dogs
app.get('/dogs', (req, res) => {
    pool.query(`SELECT * FROM dogs`)
    .then((data) => {
        res.send(data.rows)
        console.log(data.rows)
    })
    .catch((err) => {
        console.error(err)
    })
})

app.get('/dogs/:id', (req, res) => {
    const id = Number.parseInt(req.params.id)

    if (Number.isNaN(id)) {
        res.sendStatus(400)
        return;
    }
    pool.query(`SELECT * FROM dogs WHERE id = $1`, [id])
    .then((data) => {
        if (data.rows.length === 0) {
            console.log("Dog does not exist with id : ", id)
            res.sendStatus(404)
        }
        res.json(data.rows[0])
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(500);
    })
})

// get all the type
app.get('/type', (req, res) => {
    pool.query(`SELECT * FROM dog_type`)
    .then((data) => {
        res.send(data.rows)
        console.log(data.rows)
    })
    .catch((err) => {
        console.error(err)
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})