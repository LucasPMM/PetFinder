# PetFinder

TP1 de Engenharia de Software

O objetivo desse projeto é apresentar uma proposta alternativa para que os donos de animais tenham um mecanismo rápido e seguro de interagir com uma comunidade e achar o seu pet.

## Funcionalidades
O sistema em questão será capaz de autenticar usuários e realizar o cadastro de animais perdidos, além de permitir que sejam criados comentários nos posts para que informações acerca do paradeiro do animal sejam compartilhadas com o dono.

## Grupo
João Pedro Ribeiro Junho (2019006787) Backend

Lucas Paulo Martins Mariz (2021037961) Full stack

Marcelo Sartori Locatelli (2019006949) Backend

Renan da Silva Moreira (2018020611) Backend

## Tecnologias
- **Database**: SQL
- **Backend**: NodeJS + Sequelize
- **Frontend**: Angular

## Sprint Planning

### Histórias
- Autenticação
- Listagem de animais
- Cadastro de animais
- Comentários nos posts dos animais perdidos

### Tarefas
Quadro de tarfas: https://github.com/LucasPMM/PetFinder/projects

0. Configuração (GRUPO)
    - Definição das tecnologias a serem utilizadas
    - Estruturação base do framework do frontend
    - Estruturação base da API a ser consumida pelo frontend

1. Autenticação
    - Backend: (Renan)
        - Criação e configuração do projeto no firebase para fornecer o CRUD de 
    - Frontend: (Lucas)
        - Telas de signin e signup

2. Listagem de animais
    - Backend (Marcelo):
        - Retornar a listagem de animais (GET)
        - Retornar os animais filtrados (nome, raça...) (GET)
        - Retornar os detelhes do animal (GET)
    - Frontend: (João Pedro)
        - Dashboard da listagem de animais
        - Tela do detalhe do animal perdido

3. Cadastro de animais
    - Backend: (Renan)
        - Cadastrar um animal no sistema (POST) 
        - Deletar um animal cadastrado no sistema (DELETE)
        - Editar um animal cadastrado no sistema (PUT)
    - Frontend: (Lucas)
        - Tela do formulário de cadastro de um animal
        - Tela do formulário de edição de um animal
        - Funcionalidade de deletar um animal cadastrado

4. Comentários sobre os animais
    - Backend: (Marcelo)
        - Criar um comentário (POST)
        - Exibir comentários sobre um animal (GET)
        - Deletar um comentário comentário (DELETE)
    - Frontend: (João Pedro)
        - Formulário de comentário na tela de detalhe do animal
