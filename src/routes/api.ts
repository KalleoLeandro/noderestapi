import { Router } from 'express';
import { Request, Response } from 'express';
import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/localizar/:id', apiController.listarUm);
//rotas get
router.get('/', apiController.listarTodos);


//rotas post
router.post('/criarfrase', apiController.criar);

//rotas put
router.put('/atualizarfrase', apiController.atualizar);

//rotas delete
router.delete('/deletar/:id', apiController.deletar);


export default router;