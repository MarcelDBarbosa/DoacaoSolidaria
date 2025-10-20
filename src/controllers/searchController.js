const axios = require('axios')
const RegisterModel = require("../models/registerModel")
const padrao = /^\d{8}$/


exports.search = async function(req, res){
    let cep = req.query.valor
    cep = cep.replace(/\D/g, '')  // Regex para capturar apenas numeros do usuario
    if (padrao.test(cep)){   //só tenta recuperar endereço se o CEP estiver no padrão aceito pela API
        const endereco = await buscaCEP(cep)
        const cidadeDoCep = endereco.localidade  // Captura a cidade do cep digitado
        await searchInMongo(req, res, { city: cidadeDoCep, allowed: 1})  // Renderiza em 'search' os documentos retornados da consulta 
    }
    else res.render('index', { error: "CEP inválido! Insira o CEP com 8 dígitos e sem hífen" })    
}

//acessa API externa para obter endereço
async function buscaCEP(cep) {
    const busca = `https://viacep.com.br/ws/${cep}/json`
    try {
        const resposta = await axios.get(busca)
        const resultado = resposta.data
        if (resultado.erro == "true") return "O CEP digitado não existe!"
        else return resultado
    } catch (error) {
        return 'Erro ao acessar o servidor! Tente mais tarde.'
    }}

exports.searchAll = async function (req, res) {
    await searchInMongo(req, res, { allowed: 1 })  // Renderiza em 'search' todos os documentos do BD
}

exports.searchJson = async function(req, res){
    let cep = req.query.valor
    cep = cep.replace(/\D/g, '')  // Regex para capturar apenas numeros do usuario
    if (padrao.test(cep)){   //só tenta recuperar endereço se o CEP estiver no padrão aceito pela API
        const endereco = await buscaCEP(cep)
        if (typeof endereco !== "string") {   // Verifica se a API coletou o endereço pelo CEP
            res.json(endereco)
        } else {
            res.json({ erro: endereco })
        }
    }
    else res.render('index', { error: "CEP inválido! Insira o CEP com 8 dígitos e sem hífen" })    
}


async function searchInMongo(req, res, query) {
    try {
        const users = await RegisterModel.find(query);
        const cleanUsers = users.map(user => ({ ...user.toObject() }))
        res.render('search', { cleanUsers }); // renderize a view com os resultados
    } catch (error) {
        res.render('search', { error })
    }
}