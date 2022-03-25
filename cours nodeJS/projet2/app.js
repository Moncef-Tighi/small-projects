import express from "express";
import path from "path";
import mysql from 'mysql';

import articlesRouter from './router/articlesRouter.js';

const server = express();
const db = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "",
    database : "employes"
})
db.connect((error) => {
    if (error) return console.log(error.stack);
    console.log("Connexion à la base de donné réussie");
});    

//server.use(helmet());
server.use(express.json());
server.use(express.urlencoded());
server.use(express.static('public') );
server.set('view engine', 'ejs');


server.get('/', (request, response, next)=>{
    response.status(200).render("accueil.ejs");
})

server.use('/articles', articlesRouter);


server.use((request,response,next) => {
    response.status(404).send("<h1>Erreur 404</h1>");
})

server.listen(3000, ()=> {
    console.log('Server listening on port 3000');
})

export default db;