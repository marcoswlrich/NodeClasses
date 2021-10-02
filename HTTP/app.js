const http = require('http')

http
  .createServer(function (request, answer) {
    answer.end('Bem vindo ao servidor')
  })
  .listen(3000)
console.log('Servidor rodando')
