import express from 'express';


import {fetchAll} from '../model/employes.js';


const router = express.Router();

router.get('/', (request, response, next)=>{
    fetchAll( (error, employes) => {
        if (error) return response.status(500).send(error);
        return response.status(200).render("employes.ejs", {employes,});
    })
})
router.get('/:id', (request, response, next)=>{

})

export default router