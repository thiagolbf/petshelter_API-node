## API para gerenciamento de abrigos/adoção de pets

### Tecnologias utilizadas;

- Node.JS (Typescript)
- Express.JS
- Express-async-errors
- Zod
- Bcryptjs
- Jsonwebtoken
- Pg
- typeORM
- PostgreSQL

# Endpoints

| Método | Endpoint     | Responsabilidade            | Permissão                             |
| ------ | ------------ | --------------------------- | ------------------------------------- |
| POST   | api/session  | Gerar token de autenticação | ------------------------------------  |
| POST   | api/pet      | Cadastrar pet               | Apenas usuários cadastrados           |
| POST   | api/adoptpet | Adotar pet                  | Apenas usuários cadastrados           |
| GET    | api/pets     | Listar todos pets           | Qualquer usuário, não necessita token |
| PATCH  | api/pet/:id  | Atualizar pet               | Apenas usuários cadastrados           |
| DELETE | api/pet/:id  | Deletar pet                 | Apenas Admnistradores                 |
| POST   | api/user     | Cadastrar usuário           | ------------------------------------  |
| GET    | api/user/:id | Verificar usuário           | Apenas usuários cadastrados           |
