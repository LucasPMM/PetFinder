import { Dialect, Sequelize } from 'sequelize'

const configs = {
  dbName: 'PetFinder',
  dbUser: 'root',
  password: '', // Your password here

  options: {
    host: 'localhost',
    dialect: 'mysql' as Dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}

const sequelizeConnection = new Sequelize(
  configs.dbName,
  configs.dbUser,
  configs.password,
  configs.options
)

export default sequelizeConnection
