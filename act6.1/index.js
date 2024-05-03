const express = require('express')
const db = require('better-sqlite3')('personas.sqlite')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/usuaris', (req, res) => {
    const rows = db.prepare('Select * FROM usuaris').all();
    res.json(rows)
})
app.get('/usuari', (req, res) => {
    usuariId = req.query.id;
    const row = db.prepare('Select * FROM usuaris WHERE id = n').get(usuariId);
    res.json(row)
})
app.get('/productes', (req, res) => {
    const rows = db.prepare('Select * FROM productes').all();
    res.json(rows)
})
app.get('/producte', (req, res) => {
    producteId = req.query.id;
    const row = db.prepare('Select * FROM productes WHERE id = n').get(producteId);
    res.json(row)
})
app.get('/comandes', (req, res) => {
    const rows = db.prepare('Select * FROM comandes').all();
    res.json(rows)
})
app.get('/comanda', (req, res) => {
    comandaId = req.query.id;
    const row = db.prepare('Select * FROM comandes WHERE id = n').get(comandaId);
    res.json(row)
})