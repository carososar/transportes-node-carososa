var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');


router.get('/', function(req,res,next){
    res.render('admin/login',{
        layout:'admin/layout'
//admin/layout.hbs    });

})//wiew/admin/login.hbs
})

router.post('/', async function(req,res,next){
    try{
console.log(req.body);
var usuario = req.body.usuario; //flavia
var password = req.body.password; //1234

var data = await usuariosModel.getUserAndPassword(usuario,password);

if( data != undefined){
    res.redirect('/admin/novedades')

} else{
    res.render('admin/login',{ //login.hbs
        layout:'admin/layout',
        error:true
    })
}


}catch(error){
        console.log(error)
}

})

module.exports = router;