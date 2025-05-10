const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes')


const app = express();

app.use(express.urlencoded({ extended: true }));

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/loginDB')


// rotas
app.use('/api', userRouter)



// Iniciando o servidor
app.listen(5000, () => console.log('Servidor rodando na porta 5000'));

// https://github.com/alissonsuassuna/servidor-node-mongodb
























//app.use(express.json()); // <== ESSENCIAL para pegar JSON do body
//app.use(cors())
//const cors = require('cors')

//CORS, ou Cross-Origin Resource Sharing, é um mecanismo de segurança 
//do navegador que restringe o acesso a recursos de uma página web em
// um domínio diferente do domínio onde a página foi carregada. 
// Ele utiliza cabeçalhos HTTP para permitir que servidores indiquem 
 //quais origens têm permissão para solicitar seus recursos. 