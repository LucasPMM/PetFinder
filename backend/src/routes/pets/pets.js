const express = require('express');
const bodyParser = require('body-parser');
const Sequelize=require('sequelize');
const path = require('path');
const petRoutes=require('../../services/pets/index')


const router= express.Router();


//route for all pets (or queried pets)
router.get('/',(req,res) => {petRoutes.getAll(req,res)});

//route for specific id
router.get('/:id',(req,res) => {petRoutes.getOne(req,res)});



module.exports=router;