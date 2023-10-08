import { pool } from '../database.js';

const tabla = "tblPeliculas";

export const getPeliculas = async (req, res) => {
    try {
      const [resultado] = await pool.query(`SELECT * FROM ${tabla}`);
      res.json(resultado);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getOnePeliculas = async (req, res) => {
    const { id } = req.params;

    try {
        const [resultado] = await pool.query(`SELECT * FROM ${tabla} WHERE idPelicula = ${id}`);

        if (resultado.length > 0) {
            res.json(resultado[0]);
        } else {
            res.status(404).json({ message: 'No encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const putPeliculas = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, autor } = req.body;

    try {
        const [resultado] = await pool.query(`UPDATE ${tabla} SET titulo = ${titulo}, descripcion = ${descripcion}, autor = ${autor} WHERE idPelicula = ${id}`);

        if (resultado.affectedRows > 0) {
            res.json({ message: 'Actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'No encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar los datos' });
    }
};

export const delPeliculas = async (req, res) => {
    const { id } = req.params;

    try {
        const [resultado] = await pool.query(`DELETE FROM ${tabla} WHERE idPelicula = ${id}`);

        if (resultado.affectedRows > 0) {
            res.json({ message: 'Eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'No encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el dato' });
    }
};

export const postPeliculas = async (req, res) => {
    const { titulo, descripcion, autor } = req.body;

    try {
        const [resultado] = await pool.query(`INSERT INTO ${tabla} (titulo, descripcion, autor) VALUES (${titulo}, ${descripcion}, ${autor})`);

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
