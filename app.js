
const { response } = require('express')
const { request } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use(express.json())
let usuarios = [
    { id: 1, nome: 'Beatriz' },
    { id: 2, nome: 'Fernanda' }];

app.post('./postando', (request, response) => {
    const usuario = request.body
    console.log(usuarios)
    usuarios.push(usuario)
    setTimeout(() => {
        console.log("depois", usuarios);
    }, 3000)
    return response.status(201).send("USUARIO ADICIONADO NA LISTA COM SUCESSO, POSTADO")
});

