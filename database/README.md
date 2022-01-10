# Database (PetFinder)

- ## Pets

  - id: chave primária, um inteiro
  - userEmail: chave estrangeira para o dono do pet, text
  - image: imagem do pet, long text
  - name: nome do pet, uma string
  - species: espécie do pet(ex: cachorro, gato), uma string
  - breed: raça do pet(ex:pug) , uma string
  - age: idade do pet, um inteiro
  - gender: genero do animal, uma enumeração ('m' ou 'f')
  - description: descrição que pode ajudar a encontrar o pet, text
  - createdAt: quando foi criado, uma data.
  - updatedAt: quando foi atualizado, uma data.

- ## Comments
  - id: chave primária, um inteiro
  - petId: foreign key, aponta para pets.id
  - userId: foreign key, aponta para o usuário que postou o comentário
  - content: o conteúdo do comentário
  - createdAt: quando foi criado, uma data.
  - updatedAt: quando foi atualizado, uma data.
