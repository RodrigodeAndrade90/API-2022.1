const express = require('express');
const departamentoController= require("../controllers/departamentoController")
const router = require("express").Router()

router.get('/',departamentoController.getAllDepart)
router.get('/getDepByCar/:id',departamentoController.getDepartByCargo)

module.exports = router
