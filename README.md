# Desafio 02 - Projeto FastFeet

## Preparação do ambiente

### Primeira etapa

Configuramos o ambiente, estruturação de pastas e padronização do código

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;

### Segunda etapa

Cofiguramos o ORM, JWT e subimos um container com o banco de dados postgres usando Docker
Autenticação com retorno de token
Sequelize (Utilize PostgreSQL);

#### Comandos utilizados
´´´
$ yarn init -y
$ yarn add express
$ yarn add sucrase nodemon -D
$ docker run --name fastfeet -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
$ yarn add eslint -D
$ yarn eslint --init
$ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
$ yarn eslint --fix src --ext .js
$ yarn add sequelize
$ yarn add sequelize-cli -D
$ yarn add pg pg-hstore
$ yarn sequelize db:migrate
$ yarn sequelize db:migrate undo
$ yarn sequelize db:seed:all
$ yarn add bcryptjs
$ yarn add jsonwebtoken
$ yarn add yup
´´´

### Adicionando middlewares e validações

Adicionado middleware para controle de autenticação atraves do token gerado
Adicionado validações
Autenticaçãocom JWT e validação de entrada dos dados


### Session Create
![](https://raw.githubusercontent.com/fabiovige/bootcamp2019-desafio02/master/images/session-create.jpg)

### Crando recipients migrations

- Criado operações CURD para o recipients
- Criado adminMiddlewares para verificar users admin
- Somente users com admin: true é que podem gerenciar os recipients

### Recipients
![](https://raw.githubusercontent.com/fabiovige/bootcamp2019-desafio02/master/images/recipients.jpg)


$ yarn sequelize migration:create --name=create-recipients

### Atualização da migratiosn users

- Adicionando a coluna admin:boolean para checar users
- Foi criado uma nova migration apenas para adicionar uma coluna conforme recomendação

´´´
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'admin', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: false,
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
´´´

### Créditos

[Rocketseat](http://www.rocketseat.com.br)
