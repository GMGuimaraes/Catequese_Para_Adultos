# Instale

Baixe e instale o Node.js com o npm

- https://nodejs.org/en/download/current/

Baixe e instale o Postgresql

- https://www.postgresql.org/download/

# Atualize

Caso já possua o npm, certifique-se de atualizar o mesmo.

- npm install -g npm

# Instale as extensões

Entre na pasta server e execute

- npm i

Entre na pasta client e execute

- npm i

# Configure o acesso ao postgress

- va no arquivo server/.env e siga os passos

# Rode as migrations

- yanr prisma generate
- yarn prisma migrate dev

# Execute o Servidor

Navegue até a ppasta server e execute:

- yarn dev

# Execute a aplicação Catequese_Para_Adultos

Para abrir a página de Cadastro do Catequizando, acesse a pasta server e execute no terminal o comando: yarn start
