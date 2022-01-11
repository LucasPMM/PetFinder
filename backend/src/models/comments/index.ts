import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../index'

interface CommentsAttributes {
  id: number
  petId: number
  userId: string
  content: string
}
export type CommentsInput = Optional<CommentsAttributes, 'id'>
export type CommentsOuput = Required<CommentsAttributes>

class Comments
  extends Model<CommentsAttributes, CommentsInput>
  implements CommentsAttributes
{
  public id!: number
  public petId!: number
  public userId!: string
  public content!: string
}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    petId: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    userId: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  }
)

Comments.sequelize?.sync({ alter: true })

export default Comments
