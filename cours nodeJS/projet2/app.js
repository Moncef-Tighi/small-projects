import express from "express";
const server = express();

server.get('/', (request, response, next)=>{
    response.status(200).send("<h1>accueil</h1>");
})




server.use((request,response,next) => {
    response.status(404).send("<h1>Erreur 404</h1>");
})

server.listen(3000, ()=> {
    console.log('Server listening on port 3000');
})
