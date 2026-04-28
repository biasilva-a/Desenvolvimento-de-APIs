import { Router } from 'express';

const frutasRouter = Router();

frutasRouter.get('/', async (req, res) => {
    const frutas = await frutasService.getALL();
    return res.json(frutas);
});