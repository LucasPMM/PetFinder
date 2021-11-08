const Sequelize = require('sequelize');
const db = require('../../config/pets/database');

const Pet=db.define('pet',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING
    },
    species:{
        type:Sequelize.STRING
    },
    race:{
        type:Sequelize.STRING
    },
    age:{
        type:Sequelize.INTEGER
    },
    gender:{
        type:Sequelize.ENUM('m','f')
    },
});

module.exports=Pet;