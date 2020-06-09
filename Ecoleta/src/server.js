const express = require('express');
const nunjucks = require('nunjucks');

//pegar o banco de dados
const db = require("./database/db")

const server = express();

//configurar pasta publica
server.use(express.static("public"));

//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }));

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server.get("/", (req, res) => {
  return res.render("index.html");
});

server.get("/create-point", (req, res) => {

  return res.render("create-point.html");
});

server.post("/savepoint", (req, res) => {

  const query = `
  INSERT INTO places (
    image,
    name,
    address,
    address2,
    state,
    city,
    items
  ) VALUES (?,?,?,?,?,?,?)
  `

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  function afterInsertData(err) {
    if (err) {
      console.log(err)
      return res.send("Erro no cadastro")
    }

    console.log("Cadastro com sucesso");
    console.log(this);

    return res.render("create-point.html", { saved: true });

  }

  db.run(query, values, afterInsertData)

})

server.get("/search", (req, res) => {

  const search = req.query.search;

  if (search == "") {
    return res.render("search-results.html", { total: 0 })
  }


  //Consultar os dados da tabela
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(err)
    }

    const total = rows.length;

    //mostrar a página html com os dados do db
    return res.render("search-result.html", { places: rows, total });

  });

});

//ligar o servidor
server.listen(3000);