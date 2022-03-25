import express from 'express';

const router = express.Router();

router.get('/', (request, response, next)=>{
    response.status(200).render("articles.ejs");
})
router.get('/:id', (request, response, next)=>{
    const id = request.params.id;
    response.status(200).render("articles.ejs", {id,});
})

export default router