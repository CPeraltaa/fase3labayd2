const controller = {};

controller.registro = function (req, res) {
  message = "";
  console.log(req.body);
  if (req.method == "POST") {
    var user = req.body;
    var unombre = user.nombre;
    var ucontra = user.contra;
    var uapellido = user.apellido;
    var utelefono = user.telefono;
    var umail = user.correo;


    var sql =
      "INSERT INTO 'Usuario'('nombre','apellido','email','telefono', 'passwd') VALUES ('" +
      unombre +
      "','" +
      uapellido +
      "','" +
      umail +
      "','" +
      utelefono +
      "','" +
      ucontra +
      "')";
    req.getConnection((err, conn) => {
      conn.query(sql, function (err, result) {
        if (!err) {
          message = "La cuenta ha sido creada exitosamente.";
          res.render('loginusuario.ejs', { message: message });
        } else message = "error";
        res.render('registrarusuario.ejs', { message: message });
        console.log(err);
      });
    });
  } else {
    res.render("registro");
  }
};

controller.iniciarsesion = function (req, res) {
  var message = "";

     var user = req.body;
     var umail = user.correo;
     var ucontra = user.contra;

    req.getConnection((err, conn) => {
      conn.query(
        "SELECT * FROM 'Usuario' WHERE 'username'='" +
          name +
          "' and password = '" +
          pass +
          "'", (err, result) => {
            console.log(result);
          if (err) {
                res.json(err);                  
          }

          if (result.length) {
            console.log(result);
             res.render("mainwindow.ejs");
          } else {
            message = "Usuario no registrado.";
            res.render("loginusuario.ejs", { message: message });
            //console.log(games);
          }
        }
      );
    });


};


module.exports = controller;