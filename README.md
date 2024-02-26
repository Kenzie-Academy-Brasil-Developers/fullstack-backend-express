backend:
    cd backend
    npm install
    config .env como .env.example

    deletar migrations dentro da pasta migrations se não
    da erro por alguma razão...

    npm run typeorm:generate src/migrations/CreateDatabase

    npm run typeorm:run
    npm run dev

    agora deve estar pronto pra fzr requests no insomnia :thumbsup:


insomnia:

POST localhost:3000/clients = {
	"name": "robs",
	"email": "emaia33al@em.com",
	"admin": false,
	"password": "1234"
}

GET localhost:3000/clients/

PATCH localhost:3000/clients/:id = {
	"name": "robssdgo",
  "email": "emaiadfl23624224@emf2352326f2.com",	
  "password": "1234234433"
}   obs: password é obrigatoria mesmo que nao mude;

DELETE localhost:3000/clients/:id

GET localhost:3000/contacts


frontend:
    cd frontend
    cd fullstack-frontend
    npm install
    npm run dev

    "/" é o login
    
    "/register" não redireciona após o cadastro, clicar em button "acesso"

    "/dashboard"