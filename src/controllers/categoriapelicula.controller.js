import { pool } from '../database.js';

const tabla = "tblCategoriaPelicula";

export const getCategoriaPelicula = async (req, res) => {
    try {
      const [resultado] = await pool.query(`SELECT * FROM ${tabla}`);
      res.json(resultado);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getOneCategoriaPelicula = async (req, res) => {
    const { id } = req.params;

    try {
        const [resultado] = await pool.query(`SELECT * FROM ${tabla} WHERE idCatPel = ${id}`);

        if (resultado.length > 0) {
            res.json(resultado[0]);
        } else {
            res.status(404).json({ message: 'No encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const putCategoriaPelicula = async (req, res) => {
    const { id } = req.params;
    const { categoria, pelicula } = req.body;

    try {
        const [resultado] = await pool.query(`UPDATE ${tabla} SET categoria = ${categoria}, pelicula = ${pelicula} WHERE idCatPel = ${id}`);

        if (resultado.affectedRows > 0) {
            res.json({ message: 'Actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'No encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar los datos' });
    }
};

export const delCategoriaPelicula = async (req, res) => {
    const { id } = req.params;

    try {
        const [resultado] = await pool.query(`DELETE FROM ${tabla} WHERE idCatPel = ${id}`);

        if (resultado.affectedRows > 0) {
            res.json({ message: 'Eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'No encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el dato' });
    }
};

export const postCategoriaPelicula = async (req, res) => {
    const { categoria, pelicula } = req.body;

    try {
        const [resultado] = await pool.query(`INSERT INTO ${tabla} (categoria, pelicula) VALUES (${categoria}, ${pelicula})`);

        if (resultado.affectedRows > 0) {
            const nuevoId = resultado.insertId;
            res.json({ id: nuevoId, message: 'Agregado correctamente' });
        } else {
            res.status(500).json({ message: 'Error al agregar el dato' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el dato' });
    }
};
