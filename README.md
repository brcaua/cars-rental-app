<h1 align="center">
iCar API (in devlopment)
</h1>

<p align="center">A car rentals API build with Node.js.</p>

<p align="center">
  <a href="https://github.com/Rocketseat/youtube-clone-twitter/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/rocketseat/youtube-clone-twitter?color=%236633cc&logoColor=%236633cc&style=flat" alt="Contributors">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/github/license/rocketseat/youtube-clone-twitter?color=%236633cc&logo=mit" alt="License">
  </a>
</p>

<hr>

## 👨‍🚀 Participants

[<img src="https://avatars.githubusercontent.com/u/46445777?v=4" width="75px;"/>](https://github.com/brcaua)

[Breno Lima](https://github.com/brcaua)

## 💻 Techs

- [x] Node.js
- [x] Postgres
- [x] TypeORM
- [x] TypeScript
- [x] Insomnia 
- [x] Swagger
- [x] Jest  

## 🗒️ Ideas to implement

- [ ] Create an interface using React.js (e.g. Initial page)

## 🚦 How to use

###  Cadastro de carro

**Requisito Funcional**

- Deve ser possível cadastrar um novo carro.

**Regra de Negocio**

- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

### Listagem de carros
**Requisito Funcional**

- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo - nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo - nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo - nome do carro.
**Regra de Negocio**

- O usuário não precisar estar logado no sistema.

### Cadastro de Especificação no carro

**Requisito Funcional**

- Deve ser possível cadastrar uma especificação para um carro

**Regra de Negocio**

- Não deve ser possível cadastrar uma especificação para um - carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já - existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário - administrador.

### Cadastro de imagens do carro

**Requisito Funcional**

- Deve ser possível cadastrar a imagem do carro.

**Regra de Negocio**

- Utilizar o multer para upload dos arquivos.

**Regra de Negocio**

- O usuário deve poder cadastrar mais de uma imagem para o - mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário - administrador.

### Alugel de carro

**Requisito Funcional**

- Deve ser possível cadastrar um aluguel.

**Regra de Negocio**

- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo carro.
- O usuário deve estar logado na aplicação.
- Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível.

### Devolução de carro

**Requisito Funcional**

- Deve ser possível realizar a devolução de um carro.

**Regra de Negocio**

- Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.
- Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
- Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do - aluguel.
- Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
- O usuário deve estar logado na aplicação.

### Listagem de Alugueis para usuário

**Requisito Funcional**

- Deve ser possível realizar a busca de todos os alugueis para o usuário.

**Regra de Negocio**

- O usuário deve estar logado na aplicação.

### Recuperar Senha

**Requisito Funcional**

- Deve ser possível o usuário recuperar a senha informando o e-mail.
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha.
- O usuário deve conseguir inserir uma nova senha.

**Regra de Negocio**

- O usuário precisa informar uma nova senha.
- O link enviado para a recuperação deve expirar em 3 horas.

Teste:

<p align="center">
  <img alt="resolucao" src=".github/teste.PNG" width="100%">
</p>

## 🚀 Como Rodar

- Clone o projeto.
- Entre na pasta do projeto e rode "yarn install" (pode usar npm install de acordo com a sua configuração).
- Rode o comando docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
- Crei os bancos rentx e rentxtest.
- Para subir o container do projeto e do banco rode "docker-compose up".
- "yarn typeorm migration:run" para rodar as migrations.
- "yarn test" para rodar os testes.

## 🛤️ Rotas

- **`POST /users`**: Rota para cadastro de usuarios.

Enviar:
```
{
    "name": "breno",
    "email": "breno@breno.com",
    "password": "123456",
    "driver_license": "123456"
}
```

- **`POST /sessions`**: Rota para se logar

Enviar:
```
{
    "email": "breno@breno.com",
    "password": "123456"
}
```

Retorna:
```
{
    "user": {
        "name": "breno",
        "email": "breno@breno.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

- **`POST /categories`**: Rota para cadastrar categorias.

Enviar headers:

```
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

Retorna:

```
{
    "name": "Unu",
    "description": "Category2"
}
```

- **`POST /specifications`**: Rota para cadastrar especificações.

Enviar headers:

```
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

Enviar:

```
{
    "name": "Câmbio automático ee",
    "description": "Carro de rico"
}
```

- **`POST /cars`**: Rota para cadastrar carros.

Enviar headers:

```
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

Envia:

```
{
    "name": "Gol",
    "description": "Carro de boy3",
    "daily_rate": 105,
    "license_plate": "ACB-1532",
    "fine_amount": 60,
    "brand": "Ford",
    "category_id": "4669a11f-82dc-442f-bc66-adce938478ed"
}
```

Retorna:

```
{
    "id": "346fd9d5-e215-4326-a1f7-4c2261af8bb6",
    "available": true,
    "name": "Gol",
    "description": "Carro de boy3",
    "daily_rate": 105,
    "license_plate": "ACB-1532",
    "fine_amount": 60,
    "brand": "Ford",
    "category_id": "4669a11f-82dc-442f-bc66-adce938478ed",
    "created_at": "2021-06-01T20:19:58.816Z"
}
```

- **`POST /categories/import`**: Rota para cadastrar caterias pelos arquivos.

Enviar headers:

```
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

Envia:

```
{
    "file": "1615818549022-attachment.csv"
}
```

- **`GET /categories`**: Rota para listar categorias.

Enviar headers:

```
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

Retorna:

```
[
    {
        "id": "8b899d19-4cc7-4fd7-827c-6feaef47ad74",
        "name": "Category Supertest name",
        "description": "Category Supertest description",
        "created_at": "2021-05-12T23:44:41.784Z"
    },
    {
        "id": "4669a11f-82dc-442f-bc66-adce938478ed",
        "name": "Unu",
        "description": "Category2",
        "created_at": "2021-06-01T20:14:10.588Z"
    }
]
```

- **`GET /cars/available`**: Rota para listar carros disponivel.

Enviar headers:

```
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

Retorna:

```
[
    {
        "id": "346fd9d5-e215-4326-a1f7-4c2261af8bb6",
        "available": true,
        "name": "Gol",
        "description": "Carro de boy3",
        "daily_rate": 105,
        "license_plate": "ACB-1532",
        "fine_amount": 60,
        "brand": "Ford",
        "category_id": "4669a11f-82dc-442f-bc66-adce938478ed",
        "created_at": "2021-06-01T20:19:58.816Z"
    }
]
```

- **`PATCH /users/avatar`**: Rota para cadastrar imagens dos carros.

Enviar headers:

```
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

Envia:

```
{
    "avatar": "image.jpg"
}
```

- **`POST /rentals`**: Rota para alugar os carros.

Enviar headers:

```
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

Envia:

```
{
    "car_id": "346fd9d5-e215-4326-a1f7-4c2261af8bb6"
    "expected_return_date": "2021-02-03"
}
```

- **`POST /cars/specifications/:id`**: Rota para cadastrar especificações de um carro.

Enviar headers:

```
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

Envia:

```
{
    "specification_id": "7203114e-b719-4629-b437-f337122c0178"
}
```

Retorna:

```
{
    "id": "346fd9d5-e215-4326-a1f7-4c2261af8bb6",
    "available": true,
    "name": "Gol",
    "description": "Carro de boy3",
    "daily_rate": 105,
    "license_plate": "ACB-1532",
    "fine_amount": 60,
    "brand": "Ford",
    "category_id": "4669a11f-82dc-442f-bc66-adce938478ed",
    "created_at": "2021-06-01T20:19:58.816Z",
    "specifications": [
        {
            "id": "7203114e-b719-4629-b437-f337122c0178",
            "name": "Câmbio automático ee",
            "description": "Carro de rico",
            "created_at": "2021-06-01T20:18:28.778Z"
        }
    ]
}
```

- **`POST /cars/specifications/:id`**: Rota para cadastrar especificações de um carro.

Enviar headers:

```
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

Envia:

```
{
    "specification_id": "7203114e-b719-4629-b437-f337122c0178"
}
```

Retorna:

```
{
    "id": "346fd9d5-e215-4326-a1f7-4c2261af8bb6",
    "available": true,
    "name": "Gol",
    "description": "Carro de boy3",
    "daily_rate": 105,
    "license_plate": "ACB-1532",
    "fine_amount": 60,
    "brand": "Ford",
    "category_id": "4669a11f-82dc-442f-bc66-adce938478ed",
    "created_at": "2021-06-01T20:19:58.816Z",
    "specifications": [
        {
            "id": "7203114e-b719-4629-b437-f337122c0178",
            "name": "Câmbio automático ee",
            "description": "Carro de rico",
            "created_at": "2021-06-01T20:18:28.778Z"
        }
    ]
}
```

- **`POST /cars/images/:id`**: Rota para cadastrar especificações de um carro.

Enviar headers:

```
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI1NzgzMDYsImV4cCI6MTYyMjY2NDcwNiwic3ViIjoiMTQwMGE1ODEtMWRlOS00MzIyLWI4ZTktNzgxNGVjZjU3YjE5In0.-aZs3N1GD4BILCkBtGMm_L_7Gf1JICaqdoE18x-RhJc"
}
```

Envia:

```
{
    "images": [
        "image1.png",
        "image2.png"
    ]
}
```


## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT.
