import express from 'express';

import { filmesRoute } from './routes/filmes.routes.js';
import { filmesService } from './service/filmes.service.js';

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    const filmes = await filmesService.getALL();
    return res.json(filmes);
});

app.use('/filmes', filmesRoute);
app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});