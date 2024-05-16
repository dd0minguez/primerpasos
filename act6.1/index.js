const express = require('express')
const db = require('better-sqlite3')('taules.sqlite')
const app = express()
const port = 3000
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/usuario' , (req,res) => {
    res.render('usuario');
})
app.get('/usuarios' , (req,res) => {
    const select = db.prepare('SELECT * FROM usuaris').all();
    res.render('usuari', usuari=select)
})
app.post('/usuario' , (req,res) => {
    const pre = db.prepare("INSERT INTO usuaris (nom, email) values (?, ?)");
    const fun = pre.run(req.body.nom, req.body.Email);
    res.redirect('/');
})
app.get('/producto' , (req,res) => {
    res.render('producto');
})
app.get('/productos' , (req,res) => {
    const select = db.prepare('SELECT * FROM productes').all();
    res.render('productes', productes=select)
})
app.post('/producto' , (req,res) => {
    const pre = db.prepare("INSERT INTO productes (nom, preu) values (?, ?)");
    const fun = pre.run(req.body.nom, req.body.preu);
    res.redirect('/');
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
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })