import {fetchAll} from '../model/employes.js';

export const getAll =  (request, response, next)=>{
    fetchAll(employes => response.status(200).render("employes.ejs", {employes,}) )
}