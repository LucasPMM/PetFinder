const express = require('express');
const router = express.Router();
const db = require('../../config/pets/database');
const Pet = require('../../models/pets/Pet');


router.get('/',(req,res)=>{
    Pet.findAll()
    .then(pets =>{console.log(pets);
        res.send(pets);})
    .catch(err => console.log('Error: ',err));
});

router.get('/:id',(req,res)=>{
    Pet.findByPk(parseInt(req.params.id))
    .then(pets =>{console.log(pets);
        res.send(pets);})
    .catch(err => console.log('Error: ',err));
});

module.exports = router;