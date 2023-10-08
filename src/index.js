import express from 'express';
const app = express();
import morgan from 'morgan';
import cors from 'cors';
import { Categorias } from './routes/categoria.route.js';
import { Peliculas } from './routes/pelicula.route.js';
import { CategoriaPelicula } from './routes/categoriapelicula.route.js';


app.use(cors());
app.use(express.json());

app.use(Categorias);
app.use(Peliculas);
app.use(CategoriaPelicula)

// settings 
app.set('port', process.env.PORT || 3333);
app.set('json spaces', 2); 

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// starting the server
app.listen(3333, () => {
    console.log(`Servidor en puerto ${app.get('port')}`);
});
