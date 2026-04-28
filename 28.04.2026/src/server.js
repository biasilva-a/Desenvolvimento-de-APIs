import express from 'express';
import dotenv from 'dotenv';    

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.json("Hello World");
});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});