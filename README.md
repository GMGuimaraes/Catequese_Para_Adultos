# Requisitos

Precisamos que tenha instalado o Node.js com o npm e o Postgresql.
Caso não tenha, por favor instale-os.

Node.js com o npm

- https://nodejs.org/en/download/current/

Postgresql - Caso esteja instalando, anote a senha e a porta, vamos precisar mais pra frente. :warning:

- https://www.postgresql.org/download/

# Atualize

Caso já possua o npm instalado, certifique-se de atualizar o mesmo.
Abra o terminal e execute o seguinte comando:

```
npm install -g npm
```

# Agora vamos instalar as extensões do server e do cliente

Pelo terminal, navegue ate a pasta /server/ (cd server)
Execute o seguinte comando. Ele irá instalar todos os pacotes necessarios.

```
npm i
```

Ao termino e ainda pelo terminal
Volte à pasta raiz (cd ..) e entre na pasta client (cd client)
Execute o comando a seguir

```
npm i
```

# Configure o acesso ao Postgres

Precisamos fazer acesso ao banco através da nossa API.
Precisamos de algumas informações do banco instalado.

- {USER}: Usuario do seu banco. Padrão: postgres
- {PASSWORD}: A senha criada durante a configuração.
- {HOST}: O nome da maquina onde o banco está instalado, se for na mesma maquina, use localhost
- {PORT}: A porta configurada durante a instalação. Padrão: 5432
- {DATABASE}: O nome para a base de dados que desejar. Recomendamos catequese
- {SCHEMA}: O schema usado para as tabelas. Recomendamos catequese.

Em posse dessas informações, monte o endereço de acesso substituindo os campos chaves pelos seus dados de acesso. :heavy_check_mark:

DATABASE_URL=postgresql://{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}?schema={SCHEMA}

Exemplo:
DATABASE_URL="postgresql://postgres:1234@localhost:5432/catequese?schema=catequese"

Agora, navegue até a pasta /server/ e abra o arquivo .env, pode abrir com qualquer editor de texto.
No final desse arquivo, cole o endereço de acesso.
Salve e feche o editor de texto.

# Criar o banco

Com o acesso do banco configurado, vamos efetivamente criar a base de dados.
Para isso, pelo terminal, navegue até a pasta server (cd server) e execute os seguintes comandos:

```
yarn prisma generate
```

```
yarn prisma migrate dev
```

# Execute o Servidor

Pronto, tudo configurado, agora basta executar o servidor.
Ainda na pasta server, execute o comando:

```
yarn dev
```

:trophy: Pronto, servidor rodando.

# Execute a aplicação Catequese_Para_Adultos

Para abrir a página de Cadastro do Catequizando, acesse a pasta server e execute no terminal o comando: yarn start
Por ultimo, basta acessar http://localhost:3000/ para interagir com a aplocação.
