# Requisitos

Precisamos que tenha instalado o Node.js com o npm e o Postgresql.
Caso não tenha, por favor instale-os.

Node.js 16.18.0 (com npm 8.19.2)

- https://nodejs.org/en/download/

Postgresql - Caso esteja instalando, anote a senha e a porta, vamos precisar mais pra frente. :warning:

- https://www.postgresql.org/download/

# Iniciar serviços

Abra startUpMenu.exe, após aberto clique em "Start Cliente Service", e logo em seguida clique em "Start Server Service". 
Irão abrir duas janelas que podem ser minimizadas. Logo em seguida abrirá automaticamente a aplicação em seu navegador já pronta para uso.

![](/img/service-window.png)

# Finalizar serviços

Para finalizar basta clicar em "Finish Service" no menu aberno no passo anterior que a aplicação será fechada automaticamente junto das janelas
criadas por ela. 

# Avançado
<details><summary> Caso queira ver os detalhes de configuração ou seja o administrador do sistema. Clique aqui! (Este Passo é Opicional) </summary>
Os passos abaixo não são necessarios caso o menu tenha sido iniciado corretamente. 
Recomendado apenas para programadores que queiram configurações adicionais a aplicação.

## Atualize

Caso já possua o npm instalado, certifique-se de atualizar o mesmo.
Abra o terminal e execute o seguinte comando:

```
npm install -g npm
```

## Agora vamos instalar as extensões do server e do cliente

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

## Configure o acesso ao Postgres

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

## Criar o banco

Com o acesso do banco configurado, vamos efetivamente criar a base de dados.
Para isso, pelo terminal, navegue até a pasta server (cd server) e execute os seguintes comandos:

```
yarn prisma generate
```

```
yarn prisma migrate dev
```

## Execute o Servidor

Pronto, tudo configurado, agora basta executar o servidor.
Ainda na pasta server, execute o comando:

```
yarn dev
```

:trophy: Pronto, servidor rodando.

## Execute a aplicação Catequese_Para_Adultos

Para abrir a aplicação, acesse a pasta /client e execute no terminal o comando:

```
yarn start
```

Por ultimo, caso não abra automaticamente, basta acessar http://localhost:3000/ para interagir com a aplicação.
</details>

# Problemas comuns

- Caso o usuario feche o navegador por engano, o programa basta acessar http://localhost:3000/ para acessar novamente a aplicação.
- Caso alguma das janelas criadas tenha sido fechada por engano ou o programa não funcionar corretamente, é aconselhado finalizar a aplicação e inicia-la novamente.
- Caso o programa seja inicializado e finalizado em um curto espaço de tempo, é possivel que ocorram erros, basta fechar todas as janelas manualmente.
