const User = require('../models/User')
const bcrypt = require('bcrypt');


exports.registerUser = async (req, res) => {

    const { email, password } = req.body

    try {
        const hashPassord = await bcrypt.hash(password, 10)
        const user = new User({ email, password: hashPassord})
        await user.save()
        res.status(200).json({message: "Usuário salvo com sucesso"})
    } catch (error) {
        console.log(error)
        res.status(400).json({error: "Erro ao cadastrar!"})
    }

}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password')

        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: "Erro ao buscar!"})
    }
}