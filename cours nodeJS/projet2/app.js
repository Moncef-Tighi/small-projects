import express from "express";
import articlesRouter from './router/articlesRouter.js';
import employeRouter from './router/employesRouter.js';

const server = express();

//server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static('public') );
server.set('view engine', 'ejs');

server.get('/', (request, response, next)=>{
    response.status(200).render("accueil.ejs");
});

server.use('/articles', articlesRouter);
server.use('/employe', employeRouter);

server.use((request,response,next) => {
    response.status(404).send("<h1>Erreur 404</h1>");
});

server.listen(3000, ()=> {
    console.log('Server listening on port 3000');
});