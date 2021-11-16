const express = require('express');
const bodyParser = require('body-parser');
const Sequelize=require('sequelize');
const path = require('path');
const petRoutes=require('../../services/pets/index')
//connect to database
const db = require('../../config/pets/database');
db.authenticate().then(()=>console.log('Conectado')).catch(err => console.log('error'+err));

const app= express();
app.use(express.json());

const PORT = process.env.PORT||5000;


//route for all pets (or queried pets)
app.get('/pets',(req,res) => {petRoutes.getAll(req,res)});

//route for specific id
app.get('/pets/:id',(req,res) => {petRoutes.getOne(req,res)});


app.listen(PORT, function(){
    console.log(`Listening on ${PORT}`);
});