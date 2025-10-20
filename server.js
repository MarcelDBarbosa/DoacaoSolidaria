require('dotenv').config()

//definição de constantes
const express = require('express')
const app = express()
const porta = 3000
const routes = require("./src/routes")
const exphbs = require('express-handlebars')
const path = require('path')

const mongoose = require("mongoose")
 // Realiza a conexão com o mongo db e emite um evento em caso de sucesso
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log("Conexão BD OK")
    app.emit("ready")
}).catch( err => {
    console.log(err)
}) 

app.use(express.urlencoded({ extended: true})) // Tratar req.body(formularios,etc)

// Setando public folder - arquivos estaticos
// app.use(express.static(path.join(__dirname, 'public')));
const publicPath = path.join(__dirname, 'public');
console.log('Public folder path:', publicPath);
app.use(express.static(publicPath));

// handlebars
app.set('views', path.join(__dirname, "src", 'views'))  // Diretório das views
app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: 'hbs'}))  // Layout padrao
app.set('view engine', 'hbs')


app.use(routes)  // Utiliza o modulo routes

//Inicia o servidor para responder requisições após a emissão do evento "ready"(conexao bem sucedida com MongoDB)
app.on("ready", () => {
    app.listen(porta, function(){
        console.log(`A aplicação está funcionando em http://localhost:${porta}`)
    })
})
