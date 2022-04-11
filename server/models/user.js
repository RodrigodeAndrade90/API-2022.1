const db = require("../config/dbconfig")

 User = function(user) {
    this.con_email = user.email
    this.con_senha = user.password
};

User.createUser = (Userdata,result) =>{
    db.query("INSERT INTO colaborador SET ?",Userdata,(err,res)=>{
        if (err) {
            console.log("error: ", err);
            result(null, err);
          }else{
          console.log("Criado Usuário");
          result(null, res);
          }
    })
}

User.getUserByEmail = (con_email,con_senha,result) =>{
    db.query("SELECT * FROM colaborador WHERE con_email = ? and con_senha = ? ",[con_email,con_senha],(err,res)=>{
        if (err) {
            console.log("error: ", err);
            result(null, err);
          }else{
          console.log("Encontrado usuario:");
          result(null, res);
          }
    })
}
module.exports = User