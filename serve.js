const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({ extended: true }));

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/loginDB')


const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);


app.post('/register', async (req, res) => {

    const email = req.body.email
    const password = req.body.password

    console.log(email, password)
})



// Iniciando o servidor
app.listen(5000, () => console.log('Servidor rodando na porta 5000'));
