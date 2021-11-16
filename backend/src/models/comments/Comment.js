const Sequelize = require('sequelize');
const db = require('../../config/pets/database');

//modelo de um comentario
const Comment=db.define('comment',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
    },
    pet_id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    user_id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    content:{
        type:Sequelize.TEXT
    }
});

module.exports=Comment;