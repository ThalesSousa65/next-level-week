//verbose: quando você coloca uma função dentro de um objeto ele vira um metodo
// e o verbose faz com que ele mande mensagems no terminal assim dando mais
// informações

const sqlite3 = require('sqlite3').verbose();

//criar o objeto que ira fazer operações no db
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db
//db.serialize(() => {
  //Criar uma tabela com comandos SQL
  //db.run(`
    //CREATE TABLE IF NOT EXISTS places (
      //id INTEGER PRIMARY KEY AUTOINCREMENT,
      //image TEXT,
      //name TEXT,
      //address TEXT,
      //address2 TEXT,
      //state TEXT,
      //city TEXT,
      //items TEXT
    //);
  //`)

  //Inserir dados na tabela
  //const query = `
  //INSERT INTO places(
    //image,
    //name,
    //address,
    //address2,
    //state,
    //city,
    //items
  //)VALUES (?,?,?,?,?,?,?);
//`
  //const values = [
    //"https://cdn.pixabay.com/photo/2014/04/03/10/09/recycle-309974_960_720.png",
    //"Papersider",
    //"Guilherme Gemballa, Jardim América",
    //"N° 260",
    //"Santa Catarina",
    //"Rio do Sul",
    //"Papeís e Papelão"
  //]

  //function afterInsertData(err) {
    //if (err) {
      //return console.log(err)
    //}

    //console.log("Cadastrado com sucesso");
    //console.log(this);
  //}

  //db.run(query, values, afterInsertData)

  //Consultar os dados da tabela
  //  db.all(`SELECT * FROM places`, function (err, rows) {
  //    if (err) {
  //      return console.log(err)
  //    }
  //    console.log("Aqui estão seus registros: ");
  //    console.log(rows)
  //  })


  // Deletar um dado da tabela
  //  db.run(`DELETE FROM places WHERE id = ?`, [1], function (err) {
  //    if (err) {
  //      return console.log(err)
  //    }
  //    console.log("Registro deletado com sucesso");
  //});
//})

