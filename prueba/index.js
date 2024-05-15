const express = require('express')
const db = require('better-sqlite3')('personas.sqlite')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/personas', (req, res) => {
    const rows = db.prepare('Select * FROM personas').all();
    res.json(rows)
})

app.get('/persona', (req, res) => {
    personaId = req.query.id;
    const row = db.prepare('Select * FROM personas WHERE id = ?').get(personaId);
    res.json(row)
})

app.post("/postPersona", (req, res) => {
    personaId = req.body.id;
    const row = db.prepare('Select * FROM personas WHERE id = ?').get(personaId);
    res.json(row)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})