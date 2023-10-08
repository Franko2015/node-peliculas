import { Router } from 'express';
import { getCategoriaPelicula, getOneCategoriaPelicula, putCategoriaPelicula, delCategoriaPelicula, postCategoriaPelicula } from '../controllers/categoriapelicula.controller.js'

const router = Router();

// Get All
router.get('/api/categoriapelicula', getCategoriaPelicula);

// Get One
router.get('/api/categoriapelicula/:id', getOneCategoriaPelicula);

// Update
router.put('/api/categoriapelicula/:id', putCategoriaPelicula);

// Delete
router.delete('/api/categoriapelicula/:id', delCategoriaPelicula);

// Create
router.post('/api/categoriapelicula', postCategoriaPelicula);

export const CategoriaPelicula = router; 