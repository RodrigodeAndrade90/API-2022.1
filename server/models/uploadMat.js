const db = require("../config/dbconfig");

Material = function (material) {
    this.curso_aula_id = material.aula_id
}

Material.createNewMaterial = (mat_data, path, result) => {
    db.query('INSERT INTO aula_material(curso_aula_id,material_link) VALUES (?,?)', [mat_data,path], (err, res) => {
        if (err) {
            console.log("ERRO")
            result(err)
        } else {
            result(res)
        }
    })
}

module.exports = Material