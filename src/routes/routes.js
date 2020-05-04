const express = require('express');
const router = express.Router();//generador de rutas

const controllers = require('../controllers/controllers');

router.post('/user/registry', controllers.registro);

router.get('/',controllers.index);
router.get('/login',controllers.iniciarsesion);
router.get("/mainwindow", controllers.mainwindow);

module.exports = router;