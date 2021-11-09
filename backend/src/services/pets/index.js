const express = require('express');
const bodyParser = require('body-parser');
const Sequelize=require('sequelize');
const path = require('path');

//connect to database
const db = require('../../config/pets/database');
db.authenticate().then(()=>console.log('Conectado')).catch(err => console.log('error'+err));

const app= express();
app.use(express.json());

const PORT = process.env.PORT||5000;


//route for all pets (or queried pets)
app.use('/pets',require('../../routes/pets/pets'));

//route for specific id
app.use('/pets/:id',require('../../routes/pets/pets'));


app.listen(PORT, function(){
    console.log(`Listening on ${PORT}`);
});