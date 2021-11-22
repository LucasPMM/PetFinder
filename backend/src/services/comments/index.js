const express = require('express');
const db = require('../../config/pets/database');
const models = require('../../models/index');

const Pet=models.Pet;
const Comment=models.Comment;

//finds all comments that match the query
//send them if exists and 404 if no comment is found
//else, logs an error
const getAll = async (req,res) => {
    Comment.findAll({
        where: req.query
    })
    .then(comments =>{
        if (comments.length === 0)
        {
            res.status(404).send('404 not found');
            return;
        }
        res.send(comments);
    })
    .catch(err => console.log('Error: ',err));
}

//posts a new comment
//id is not necessary as it is auto increment
const postComment = async (req,res) =>{
    try{
        const newComment = req.body;
        if(!newComment)
        {
            res.status(400).send('Invalid comment');
            return
        }
        const data = await Comment.create({
            pet_id:parseInt(newComment.pet_id),
            user_id:parseInt(newComment.user_id),
            content:newComment.content,
            createdAt:newComment.createdAt,
            updatedAt:newComment.updatedAt
        });
        res.send(data);
    }catch(err){
        console.log('Error: ',err);
        res.status(400).send(`${JSON.stringify(err)}`);
    }
}

//updates a comment, only the content may be updated
const updateComment = async (req,res)=>{
    try{
        const newComment = req.body;
        if(!newComment)
        {
            res.status(400).send('Invalid comment');
            return;
        }
        await Comment.update({content:req.body.content},{where: {id: req.params.id}})
        .then((rows) => {
            if(rows[0] === 0)
            {
                res.status(404).send(`Comment with id ${req.params.id} does not exist or was not updated`);
                return;
            }
            res.status(200).send(`Success`);
        })
        .catch(err => {console.log('Error: ',err)});
    }catch(err){
        console.log('Error: ',err);
        res.status(400).send(`${JSON.stringify(err)}`);
    }
}

//deletes a comment
const deleteComment = async (req,res)=>{
    try{
        const id=req.params.id;
        if(!id)
        {
            res.status(400).send('Invalid id');
            return;
        }
        Comment.destroy({where:{id:id}})
        .then((rows)=>{
            console.log(rows);
            if(rows === 0)
            {
                res.status(404).send(`Comment with id ${req.params.id} does not exist`);
                return;
            }
            res.status(200).send(`Success`);
        })
        .catch(err => {console.log('Error: ',err)});
    }catch(err){
        console.log('Error: ',err);
    res.status(400).send(`${JSON.stringify(err)}`);
    }
}

module.exports={
    getAll,
    postComment,
    updateComment,
    deleteComment
};