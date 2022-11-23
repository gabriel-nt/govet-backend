<h1 align="center">
    🚀 GoVet
</h1>
<p align="center">Backend da aplicação GoVet</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=node&message=12.13.1&color=green&logo=node.js" />
  <img src="https://img.shields.io/static/v1?label=typescript&message=4.0.2&color=blue&logo=typescript" />
  <img src="https://img.shields.io/badge/last%20commit-october-orange" />
  <img src="https://img.shields.io/badge/license-MIT-success"/>
</p>

<p align="center">
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-pré-requisitos">Pré-Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-o-back-end-servidor">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-bibliotecas">Bibliotecas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Lincença</a>
</p>

<h3 align="center"> 
🚧  Finalizado  🚧
</h3>

### 📎 Features

#### Agendamentos
- [x] Criação de Agendamento
- [x] Listagem de Agendamentos
- [x] Listagem de Prestadores de Serviços
- [x] Listagem de Dias Disponíveis para Agendamento
- [x] Listagem de Meses Disponíveis para Agendamento

#### Usuários
- [x] Login e Logout
- [x] Criação de Perfil
- [x] Listagem do Perfil
- [x] Atualização de Perfil
- [x] Atualização do Avatar
- [x] Alteração de Senha

### ⚙ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e/ou [Yarn](https://https://yarnpkg.com/)
Também, será necessário ter o [Docker](https://www.docker.com/) instalado e configurado em sua máquina.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🛢 Configurando Docker
```bash

# Clone este repositório
$ git clone https://github.com/gabriel-nt/govet-backend

# Crie o container do Postgres
$ docker run --name gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
````

### 🎲 Rodando o Back End (servidor)

```bash
# Instale as dependências
$ npm install ou yarn

# Rode as migrations
$ yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server ou npm run dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
* Obs: Para executar os backend, crie um banco de dados.

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- NodeJS
- TypeScript
- Postgres
- MongoDB
- Redis

### 📕 Bibliotecas

Esse projeto foi desenvolvido com o auxílio das seguintes libs:

- Express
- TypeORM
- jwt
- celebrate
- date-fns

### 📙 Arquitetura do Projeto

Para uma melhorar estrutura de projetos utilizamos das seguintes fundamentos:

- DDD
- SOLID

###  📘 Padrão de Código

Para padronizar a escrita do código, utilizamos as seguinte ferramentas:

- Eslint
- Prettier
- EditorConfig

### 📝 Licença

Esse projeto está sob a licença MIT.

<hr/>

Feito por Gabriel Teixeira
