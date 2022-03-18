import fs from 'fs';
import http from 'http';

const index = fs.readFileSync("./view/index.html", {encoding : 'utf-8'});

const homeController = function(request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write(index);
}

const accueilController = function(request, response) {
    response.writeHead(200);
    response.write("<h1>Accueil</h1>");
}

const server = http.createServer( (request, response, next)=> {

    const routes = {
        "/home" : homeController,
        "/accueil" : accueilController,    
    }
    
    console.log(request.url);

    if (request.url in routes) {
        routes[request.url](request,response);
    }
    else {
        response.writeHead(404);
        response.write("<h1>Erreur 404</h1>");
    }
    response.end();    
});

const port = 3000;
server.listen(port);
console.log(`Server listening on port ${port}`);
