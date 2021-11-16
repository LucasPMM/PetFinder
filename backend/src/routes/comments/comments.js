const express = require('express');
const Sequelize=require('sequelize');
const path = require('path');
const commentRoutes=require('../../services/comments/index')

const router= express.Router();
router.use(express.json())


router.post('/',(req,res)=>{
    commentRoutes.postComment(req,res);
})

module.exports = router;