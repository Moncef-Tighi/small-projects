const express = require('express');
const router = express.Router();

// MY MODULES
const employe_module = require('../model/employes');
const service_module = require('../model/service');

// MY MODULES

router.get('/employe/list',function (req,res){
    console.log('test')
})

router.get('/',function (req,res){
    employe_module.get_employes(function (err,result){

        service_module.get_services(function (err,result2){

            let dataSent = {
                employes: result,
                services: result2
            }

            res.render('emp_list',dataSent)
        })

    })
})

router.get('/emp/add',function (req,res){

    res.render('emp_add'); // view formulaire d'ajout
})

router.post('/emp/add',function (req,res){

  let inputs = req.body;

  let {nom,prenom,service,salaire} = inputs;

  employe_module.employe_add(nom,prenom,service,salaire,
      function (err,data){

      if (err) console.log(err)

          res.redirect('/')

  })



})


module.exports = router;

