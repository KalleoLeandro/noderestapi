import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import router from './routes/api';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(express.json());

server.use(cors());

//Declaração de cors
server.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}));

//Public folder
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended:true}));

//Routes
server.use(router);

//Default Route
server.use((req:Request, res:Response)=>{
    res.status(404);
    res.json('Página não encontrada!');
});

//server start
server.listen(process.env.PORT);