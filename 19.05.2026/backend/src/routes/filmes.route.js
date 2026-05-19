import  express from 'express';
import filmesService from '../services/filmes.service.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const filmes = await filmesService.getALL();
        res.json(filmes);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const filme = await filmesService.getById(req.params.id);
        res.json(filme);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const novoFilme = await filmesService.create(req.body);
        res.status(201).json(novoFilme);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const filmeAtualizado = await filmesService.update(req.params.id, req.body);
        res.json(filmeAtualizado);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const filmeEditado = await filmesService.partialUpdate(req.params.id, req.body);
        res.json(filmeEditado);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const mensagem = await filmesService.delete(req.params.id);
        res.json(mensagem);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

export default router;