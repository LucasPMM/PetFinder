const Sequelize=require('sequelize');

//isso foi só uma database de exemplo que criei, pode ser mudado facilmente para a versão final
module.exports = new Sequelize('pets', 'marcelo', '123456', {
    host: 'localhost',
    dialect:'mysql',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
  });