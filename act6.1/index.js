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
    res.render('usuario', {alerta: ""});

})
app.get('/usuarios' , (req,res) => {
    const select = db.prepare('SELECT * FROM usuaris').all();
    res.render('usuarios', usuaris=select);
})
app.get('/usuarioDetalle' , (req,res) => {
    const usuari_Id = req.query.id;
    const select = db.prepare('SELECT * FROM usuaris where id = ?').get(usuari_Id);
    res.render('usuarioDetalle', {usuari: select});
})
app.get('/productoDetalle' , (req,res) => {
    const producte_Id = req.query.id;
    const select = db.prepare('SELECT * FROM productes where id = ?').get(producte_Id);
    res.render('productoDetalle', {producto: select});
})
app.post('/usuario' , (req,res) => {
    if (!req.body.nom){
        res.render("usuario", {alerta: "No hay nombre del usuario"})
    } else {
    const pre = db.prepare("INSERT INTO usuaris (nom, email) values (?, ?)");
    const fun = pre.run(req.body.nom, req.body.Email);
    res.redirect('/usuarios');
    }
})
app.get('/producto' , (req,res) => {
    res.render('producto', {alerta: ""});
})
app.get('/productos' , (req,res) => {
    const select = db.prepare('SELECT * FROM productes').all();
    res.render('productos', productes=select)
})
app.get('/formPedido' , (req,res) => {
    const usuario = db.prepare("SELECT * FROM usuaris").all();
    const producto = db.prepare("SELECT * FROM productes").all();
    res.render('formPedido', {usuaris:usuario, productes:producto});
})
app.get('/editPedido' , (req,res) => {
    const pedido_Id = req.query.id;
    const comanda = db.prepare('SELECT * FROM comandes WHERE id = ?').get(pedido_Id);
    const usuario = db.prepare("SELECT * FROM usuaris").all();
    const producto = db.prepare("SELECT * FROM productes").all();
    res.render('editPedido', {usuaris:usuario, productes:producto, pedido:comanda});
})
app.post('/editPedido' , (req,res) => {
    const pre = db.prepare("UPDATE comandes SET usuari_id = ?, producte_id = ? WHERE id = ?")
    console.log(req.body);
    const fun = pre.run(req.body.lista_usuarios, req.body.lista_productos, req.body.id);
    res.redirect('/pedido');
})
app.post('/formPedido' , (req,res) => {
    const pre = db.prepare("INSERT INTO comandes (usuari_id, producte_id) values (?, ?)");
    const fun = pre.run(req.body.lista_usuarios, req.body.lista_productos);
    res.redirect('/pedido');
})
app.post('/producto' , (req,res) => {
    if (!req.body.nom){
        res.render("producto", {alerta: "No hay nombre en el producto"})
    } else {
    const pre = db.prepare("INSERT INTO productes (nom, preu) values (?, ?)");
    const fun = pre.run(req.body.nom, req.body.preu);
    res.redirect('/productos');
    }
})
app.get('/pedido' , (req,res) => {
    const select = db.prepare('SELECT * FROM comandes').all();
    res.render('pedido', comanda = select)
})
app.get('/pedidoDetalle' , (req,res) => {
    const pedido_Id = req.query.id;
    const select = db.prepare('SELECT pedido.id, usuario.nom AS nombreUsuario, producto.nom AS nombreProducto FROM comandes pedido JOIN usuaris usuario ON usuario.id = pedido.usuari_id JOIN productes producto ON producto.id = pedido.producte_id WHERE pedido.id = ?').get(pedido_Id);
    res.render('pedidoDetalle', {pedido: select});
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