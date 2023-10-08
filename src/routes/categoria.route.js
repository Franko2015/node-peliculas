import { Router } from 'express';
import { getCategorias, getOneCategorias, putCategorias, delCategorias, postCategorias } from '../controllers/categoria.controller.js'

const router = Router();

// Get All
router.get('/api/categorias', getCategorias);

// Get One
router.get('/api/categorias/:id', getOneCategorias);

// Update
router.put('/api/categorias/:id', putCategorias);

// Delete
router.delete('/api/categorias/:id', delCategorias);

// Create
router.post('/api/categorias', postCategorias);

export const Categorias = router;