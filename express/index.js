const express = require('express') //importando o express
const app = express() // Iniciando o express

app.get('/', (req, res) => {
  res.send('Bem vindo ao express')
})
//parametro não obrigatorio
app.get('/blog/:artigo?', (req, res) => res.send('Bem vindo ao blog'))

app.get('/canal', (req, res) => res.send('Bem vindo ao canal'))

app.get('/ola/:nome', (req, res) => {
  let nome = req.params.nome
  res.send('<h1>Oi ' + nome + '</h1>')
})

app.listen(4000, function (erro) {
  if (erro) {
    console.log('Ocorreu um erro')
  } else {
    console.log('Servidor iniciado com sucesso')
  }
})
