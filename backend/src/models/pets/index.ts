import { DataTypes, Model, Optional } from 'sequelize'
import Comments from '../comments'
import sequelizeConnection from '../index'

interface PetsAttributes {
  id: number
  name: string
  specie: string
  age: number
  gender: string
}
export type PetsInput = Optional<PetsAttributes, 'id'>
export type PetsOuput = Required<PetsAttributes>

class Pets extends Model<PetsAttributes, PetsInput> implements PetsAttributes {
  public id!: number
  public name!: string
  public specie!: string
  public age!: number
  public gender!: string
}

Pets.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    specie: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    gender: {
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
