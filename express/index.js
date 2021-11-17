const express = require('express') //importando o express
const app = express() // Iniciando o express

app.get('/', (req, res) => {
  res.send('Bem vindo ao express')
})

app.get('/blog', (req, res) => res.send('Bem vindo ao blog'))

app.get('/canal', (req, res) => res.send('Bem vindo ao canal'))

app.listen(4000, function (erro) {
  if (erro) {
    console.log('Ocorreu um erro')
  } else {
    console.log('Servidor iniciado com sucesso')
  }
})
