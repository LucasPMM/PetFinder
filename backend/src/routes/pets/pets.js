const express = require('express');
const bodyParser = require('body-parser');
const Sequelize=require('sequelize');
const path = require('path');
const petRoutes=require('../../services/pets/index')
//connect to database
const db = require('../../config/pets/database');
db.authenticate().then(()=>console.log('Conectado')).catch(err => console.log('error'+err));

const router= express.Router();


//route for all pets (or queried pets)
router.get('/pets',(req,res) => {petRoutes.getAll(req,res)});

//route for specific id
router.get('/pets/:id',(req,res) => {petRoutes.getOne(req,res)});



module.exports=router;