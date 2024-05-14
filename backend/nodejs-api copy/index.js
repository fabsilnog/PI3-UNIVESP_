require("dotenv").config();


const db = require('./db.js') 
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.get('/usuarios/:ano_ingresso', async (req, res) => {
    const results = await db.selectUser(req.params.ano_ingresso); // aqui chamamos o comando sql do arquivo db.js com o parametro id
    res.json(results);
})

app.delete('/usuarios/delete/:id', async (req, res) => {
    await db.deleteUser(req.params.id);
    res.sendStatus(204);
})

app.get('/usuarios', async (req, res) => {
    const results = await db.selectUsers();
    res.json(results);
});
	
app.post('/usuarios', async (req, res) => {
    await db.insertUser(req.body);
    res.sendStatus(201);
});

app.patch('/usuarios/:id', async (req, res) => {
    await db.updateUser(req.params.id, req.body);
    res.sendStatus(200);
});

//inicia o servidor
app.listen(port);
console.log('API funcionando!');
