import express from 'express';
import {getAll} from "../controller/employeController.js";

const router = express.Router();

router.get('/', getAll);
router.get('/:id');

export default router