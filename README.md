# Desafio 02 - Projeto FastFeet

## Preparação do ambiente

### Primeira etapa

Configuramos o ambiente, estruturação de pastas e padronização do código

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;

#### Comandos utilizados

$ yarn init -y

$ yarn add express

$ yarn add sucrase nodemon -D

$ docker run --name fastfeet -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

$ yarn add eslint -D

$ yarn eslint --init

$ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

$ yarn eslint --fix src --ext .js

### Segunda etapa

Cofiguramos o ORM, JWT e subimos um container com o banco de dados postgres usando Docker
Autenticação com retorno de token
Sequelize (Utilize PostgreSQL);

#### COmandos utilizados

$ yarn add sequelize

$ yarn add sequelize-cli -D

$ yarn add pg pg-hstore

$ yarn sequelize db:migrate

$ yarn sequelize db:migrate undo

$ yarn sequelize db:seed:all

$ yarn add bcryptjs

$ yarn add jsonwebtoken

