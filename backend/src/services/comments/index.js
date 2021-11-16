const express = require('express');
const db = require('../../config/pets/database');
const models = require('../../models/index');

const Pet=models.Pet;
const Comment=models.Comment;

const postComment = async (req,res) =>{
    try{
        const newComment = req.body;
        console.log(newComment.content);
        if(!newComment)
        {
            res.status(400).send('Invalid comment');
        }
        else
        {
            const data = await Comment.create({
                pet_id:parseInt(newComment.pet_id),
                user_id:parseInt(newComment.user_id),
                content:newComment.content,
                createdAt:newComment.createdAt,
                updatedAt:newComment.updatedAt
            });
            res.send(data);
        }
    }catch(err){
        console.log('Error: ',err);
        res.status(400).send(`${JSON.stringify(err)}`);
    }
}

module.exports={
    postComment
};