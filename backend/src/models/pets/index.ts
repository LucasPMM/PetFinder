import { DataTypes, Model, Optional } from 'sequelize'
import Comments from '../comments'
import sequelizeConnection from '../index'

interface PetsAttributes {
  id: number
  userEmail: string
  name: string
  species: string
  breed: string
  age: number
  gender: string
  description: string
}
export type PetsInput = Optional<PetsAttributes, 'id'>
export type PetsOuput = Required<PetsAttributes>

class Pets extends Model<PetsAttributes, PetsInput> implements PetsAttributes {
  public id!: number
  public name!: string
  public userEmail!: string
  public species!: string
  public breed!: string
  public age!: number
  public gender!: string
  public description!: string
}

Pets.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    userEmail: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    species: {
      type: DataTypes.STRING
    },
    breed: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    gender: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  }
)

Pets.hasMany(Comments, { foreignKey: 'petId', sourceKey: 'id' })
Comments.belongsTo(Pets, { foreignKey: 'petId', targetKey: 'id' })

Pets.sequelize?.sync({ alter: true })

export default Pets
