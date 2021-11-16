# Databases

- ## pets
  - id: chave primária, um inteiro
  - name: nome do pet, uma string
  - species: espécie do pet(ex: cachorro, gato), uma string
  - race: raça do pet(ex: pug), uma string
  - age: idade do pet, um inteiro
  - gender: genero do animal, uma enumeração ('m' ou 'f')
  - description: descrição do pet / informações que podem ajudar a encontrar o pet.
  - createdAt: quando foi criado, uma data.
  - updatedAt: quando foi atualizado, uma data.

- ## comments
  - id: chave primária, um inteiro
  - pet_id: foreign key, aponta para pets.id
  - user_id: foreign key, aponta para o usuário que postou o comentário
  - content: o conteúdo do comentário
