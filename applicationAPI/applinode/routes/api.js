const express = require('express');
const api = express.Router();

// MY MODULES
const employe_module = require('../model/employes');
const service_module = require('../model/service');

// MY MODULES

api.get('/',function (req,res){ //  action recuperer la liste des emp
    employe_module.get_employes(function (err,result){

        service_module.get_services(function (err,result2){

            let dataSent = {
                data : {
                    employes: result,
                    services: result2
                },
                err : err
            }

            res.status(200).send(dataSent)
        })

    })
})

api.post('/emp/add',function (req,res){ // ajouter un employé

  let inputs = req.body;

  console.log(inputs)

  let {nom,prenom,service,salaire} = inputs;

  employe_module.employe_add(nom,prenom,/*service*/1,/*salaire*/1, function (err,data){

      if (err) console.log(err)

          let obj = {
              err: err,
              data: data
          }

          res.status(200).send(obj)

  })



})


module.exports = api;

