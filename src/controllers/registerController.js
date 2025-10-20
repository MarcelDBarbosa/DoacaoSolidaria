const RegisterModel = require("../models/registerModel")

exports.register = function(req, res) {
    res.render('register');
}

exports.registerPost = async function(req, res) {

    const { name, email, phone, instagram, cep, 
        logradouro, number, complement, city, state, description } = req.body;

    const registro = {
        allowed: 0,
        nome: name,
        email,
        phone,
        instagram,
        cep,
        logradouro,
        number,
        complement,
        city,
        state,
        description
    }

   try {
        const registerDocument = await RegisterModel.create(registro)  // Retorna o documento correspondente
        const registerObject = registerDocument.toObject()  // Transforma o documento MongoDB em objeto JS
        res.render('register_success', { registerObject})

   } catch (err) {
    console.log(err)
   }
}