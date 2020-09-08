const express = require('express')
const server = express()
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')
const nunjucks = require('nunjucks') //npm install nunjucks usado para dar poder ao html de intender js
//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//configura arquivos estaticos(css, scrpts, images)
server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500) //npm run dev para rodar no vsc o servidor e node src/server.js para rodar no git bashn