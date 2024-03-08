const express = require('express') //importacao do pacote
const cors = require('cors') //importacao do pacote

const app = express() //instanciando express

app.use(cors())

app.get('/aaa', function (req, res) { //endereco da requisicao onde e retornado hello world
  res.send('Hello World')
})
app.listen(3000) //execucao do servidor