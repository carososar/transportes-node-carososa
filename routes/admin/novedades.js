var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');


router.get('/', async function(req,res,netx){
    //var novedades = await novedadesModel.getNovedades();
    var novedades
    if(req.query.q === undefined){
        novedades = await novedadesModel.getNovedades();
    }else{
        novedades = await novedadesModel.buscarNovedades(req.query.q);
    }

    res.render('admin/novedades',{
        layout:'admin/layout', 
        persona:req.session.nombre,
        novedades,
        q: req.query.q,
        is_search: req.query.q !== undefined
    }); //view/admin/novedades.hbs
})
//=> o function
//esto sirve para mostar form el alta de las novedades
router.get('/agregar',(req,res,next) =>{
    res.render('admin/agregar',{ //agregar.hbs
        layout: 'admin/layout'
    })
})

router.post('/agregar', async (req,res,next) =>{
    try{
        if(req.body.titulo != "" && req.body.sustitulo != "" && req.body.cuerpo != ""){
            await novedadesModel.insertNovedades(req.body)
            res.redirect('/admin/novedades')

        } else {
            res.render('admin/agregar',{
                layout:'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }

    }catch(error){
        console.log(error)
        res.render('admin/agregar',{
            layout:'admin/layout',
            error: true,
            message: 'No se carga la novedad'
        })
    }
    
})

//*eliminar la novedad*//
router.get('/eliminar/:id', async (req,res,next) =>{
    //console.log(req.params.id);
    var id = req.params.id;
    await novedadesModel.deleteNovedadByID(id);
    res.redirect('/admin/novedades')
})

/*vista modificar (form) + los datos de los campos para poder modificar*/

router.get('/modificar/:id', async(req,res,next) =>{
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadesByID(id);
    res.render('admin/modificar',{
        layout:'admin/layout',
        novedad

    })
})

/*actualizacion de los datos*/

router.post('/modificar', async(req,res,next)=>{
    try{

        var obj = {
            titulo:req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        }

        await novedadesModel.modificarNovedadByID(obj, req.body.id);
        res.redirect('/admin/novedades');

    }catch(error){
        console.log(error)
        res.render('admin/modificar',{
            layout:'admin/layout',
            error: true,
            message: 'No se mofico la novedad'
        })
    }
})

module.exports = router;