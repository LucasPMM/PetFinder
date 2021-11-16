const Pet = require('./pets/Pet');
const Comment = require('./comments/Comment');

//Cada pet pode ter n comentários
Pet.hasMany(Comment,{
    foreignKey:'pet_id',
    sourceKey:'id'
});

//cada comentário é sobre um pet
Comment.belongsTo(Pet,{
    foreignKey:'pet_id',
    targetKey:'id'
});

module.exports = {
    Pet,
    Comment
};