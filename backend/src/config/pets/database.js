const Sequelize=require('sequelize');

module.exports = new Sequelize('pets', 'root', '32236733', {
    host: 'localhost',
    dialect:'mysql',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
  });