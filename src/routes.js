const express = require("express")
const route = express.Router()
const homeController = require("./controllers/homeController")
const searchController = require("./controllers/searchController")
const registerController = require("./controllers/registerController")
const aboutController = require("./controllers/aboutController")

//rota principal
route.get('/', homeController.home)

//rota para buscar CEP
route.get('/buscar', searchController.search)

// rota de todos os cadastros
route.get('/all', searchController.searchAll)

//rota do formulario de cadastro
route.get('/cadastrar', registerController.register)
route.post('/cadastrar', registerController.registerPost)

//rota do sobre
route.get('/sobre', aboutController.about)

// rota para buscar Cep e salvar em JSON
route.get('/buscarCep', searchController.searchJson)

module.exports = route