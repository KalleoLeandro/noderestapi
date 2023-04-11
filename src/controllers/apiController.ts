import { Request, Response } from 'express';
const pool = require('../db/conn');

export const listarTodos = async (req: Request, res: Response) => {
    const sql = `select * from frases`;
    await pool.query(sql, (err: Error, data: any) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.end();
        } else {
            const frases = data;
            console.log(frases);
            res.status(200);
            res.json(frases);
        }
    });
}
export const listarUm = async (req: Request, res: Response) => {
    const id = req.params.id;
    const values = [id];
    const sql = `select * from frases where id = ?`;
    await pool.query(sql, values,(err:Error, data: any) => {
        if (err) {
            console.log(err);  
            res.status(500);
            res.end();
        } else {
            const frase = data;             
            res.status(200);
            res.json(frase);                        
        }
    });   
}

export const criar = async (req: Request, res: Response) => {
    const texto = req.body.texto;
    const autor = req.body.autor;
    const values = [texto, autor];
    const sql = `insert into frases (texto, autor) values (?,?)`;
    await pool.query(sql, values, (err: Error, data: any) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.end();
        } else {

            res.status(201);
            res.end();
        }
    });
}

export const atualizar = async (req: Request, res: Response) => {
    const id = req.body.id;
    const texto = req.body.texto;
    const autor = req.body.autor;
    const values = [texto, autor, id];
    const sql = `update frases set texto = ?, autor = ? where id = ?`;
    await pool.query(sql, values, (err: Error, data: any) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.end();
        } else {
            res.status(204);
            res.end();
        }
    });
}

export const deletar = async (req: Request, res: Response) => {
    const id = req.params.id;    
    const values = [id];
    const sql = `delete from frases where id = ?`;
    await pool.query(sql, values, (err: Error) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.end();
        } else {
            res.status(204);
            res.end();
        }
    });    
}