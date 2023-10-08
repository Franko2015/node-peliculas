import express from 'express';
const app = express();
import morgan from 'morgan';
import cors from 'cors';

app.use(cors());
app.use(express.json());



// settings
app.set('port', process.env.PORT || 3333);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// starting the server
app.listen(3000, () => {
    console.log(`Servidor en puerto ${app.get('port')}`);
});
