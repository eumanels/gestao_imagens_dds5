import express from 'express';
import fileUpload from 'express-fileupload';
import {criarImagem, deletarImagem, editarImagem, downloadImagem, mostrarImagens, mostrarUmaImagem} from './controllers/ImagemController.js';
import cors from 'cors';
const app = express();
const porta = 5000;

app.get('/', (req, res)=>{
    res.send('API Funcionando');
});

app.use(fileUpload());
app.use(express.json());
app.use(cors());

app.get('/public/:nomeImg', downloadImagem);
//CRUD Imagem
app.post('/imagem', criarImagem);
app.get('/imagem', mostrarImagens);
app.get('/imagem/:id_imagem', mostrarUmaImagem);
app.put('/imagem/:id_imagem', editarImagem);
app.delete('/imagem/:id_imagem', deletarImagem);

app.listen(porta, ()=>{
    console.log(`API Rodando na porta ${porta}`)
});