const express= require('express')
const pets = require('./pets/pets')
const comments = require('./comments/comments')
const app = express()
const PORT = process.env.PORT||5000;

app.use(express.json())
//connect to database
const db = require('../config/pets/database');

db.authenticate().then(()=>console.log('Conectado')).catch(err => console.log('error'+err));

app.use('/pets',pets);
app.use('/comments',comments);

app.listen(PORT, function(){
    console.log(`Listening on ${PORT}`);
});