const express = require('express');
const router = express.Router();
const db = require('../../config/pets/database');
const models = require('../../models/index');

const Pet=models.Pet;
const Comment=models.Comment;
//finds all pets that match the query
//send them if exists and 404 if no pet is found
//else, logs an error
router.get('/',(req,res)=>{ 
    Pet.findAll({
        where: req.query
    })
    .then(pets =>{
        if (pets.length === 0)
        {
            res.status(404).send('404 not found');
            return;
        }
        res.send(pets);
    })
    .catch(err => console.log('Error: ',err));
});

//finds pets with specific ids, and their respective comments, and send them if found
//if not found, sends 404
//if failed to connect to db/other error, logs an error
router.get('/:id',async(req,res)=>{
    const pets=await Pet.findByPk(parseInt(req.params.id))
    if(!pets)
    {
        res.status(404).send('404 not found');
        return;
    }
    var comments=await Comment.findAll({
        where:{
            pet_id:parseInt(req.params.id),
        }
    });
    if(!comments)
    {
        res.send(pets);
        return;
    }
    comments.unshift(pets);
    res.send(comments);
});

module.exports = router;