var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');


router.get('/', function(req,res,netx){
    res.render('admin/novedades',{
        layout:'admin/layout', 
        persona:req.session.nombre // admin/layout.hbs
    }); //view/admin/novedades.hbs
})

module.exports = router;