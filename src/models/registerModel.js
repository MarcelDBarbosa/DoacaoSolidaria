const mongoose = require("mongoose")

const RegisterSchema = new mongoose.Schema(
    {
        allowed: Number,
        nome: String,
        email: String,
        phone: String,
        instagram: String,
        cep: String,
        logradouro: String,
        number: Number,
        complement: String,
        city: String,
        state: String,
        description: String
    }
)

// Cria o modelo recebendo nome do model e esquema
const RegisterModel = new mongoose.model("Registros", RegisterSchema)  

module.exports = RegisterModel