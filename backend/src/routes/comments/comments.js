const express = require('express');
const Sequelize=require('sequelize');
const path = require('path');
const commentRoutes=require('../../services/comments/index')

const router= express.Router();
router.use(express.json())


router.get('/',(req,res)=>{
    commentRoutes.getAll(req,res);
});

router.post('/',(req,res)=>{
    commentRoutes.postComment(req,res);
});

router.put('/:id',(req,res)=>{
    commentRoutes.updateComment(req,res);
});

router.delete('/:id',(req,res)=>{
    commentRoutes.deleteComment(req,res);
});

module.exports = router;