# Restaurant API

Uma API RESTful desenvolvida com Node.js para gerenciar cardápios e pedidos de restaurantes. A aplicação oferece endpoints organizados para criação, listagem e atualização de produtos, categorias e pedidos, com foco em validação de dados, estrutura limpa e escalabilidade.

## 🚀 Demonstração

**Repositório:** [github.com/gabriel-valino/restaurant-api](https://github.com/gabriel-valino/restaurant-api)

## 🧪 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Knex.js
- SQLite
- Zod

## 📦 Instalação

```bash
git clone https://github.com/gabriel-valino/restaurant-api.git
cd restaurant-api
npm install
npx knex migrate:latest
npm run dev
```

⚠️ Certifique-se de que o arquivo de configuração do banco SQLite (geralmente `database.sqlite`) está corretamente configurado no `knexfile.ts` ou `.js`. Não é necessário instalar ou configurar um servidor de banco de dados.

## ✨ Funcionalidades

- Cadastro e listagem de produtos
- Registro e consulta de pedidos
- Validação de dados com Zod
- Estrutura modular e escalável

## 📚 Desafios Técnicos

A integração com o Knex exigiu atenção especial à criação de migrations e modelagem eficiente do banco relacional. Também enfrentei desafios ao garantir que a arquitetura fosse clara e de fácil manutenção, separando responsabilidades em rotas, controladores e serviços.

## 🧠 O que aprendi

- Criação e execução de migrations com Knex.js
- Design de APIs RESTful bem estruturadas
- Organização escalável de código backend com Express
- Integração com banco de dados leve e prático usando SQLite
