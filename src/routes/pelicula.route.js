import { Router } from 'express';
import { getPeliculas, getOnePeliculas, putPeliculas, delPeliculas, postPeliculas } from '../controllers/pelicula.controller.js'

const router = Router();

// Get All
router.get('/api/peliculas', getPeliculas);

// Get One
router.get('/api/peliculas/:id', getOnePeliculas);

// Update
router.put('/api/peliculas/:id', putPeliculas);

// Delete
router.delete('/api/peliculas/:id', delPeliculas);

// Create
router.post('/api/peliculas', postPeliculas);

export const Peliculas = router;