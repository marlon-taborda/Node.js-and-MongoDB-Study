# Node.js-and-MongoDB-Study
Node.js and MongoDB Study

## Run MongoDB with Docker (WSL2)
 docker run -v ~/docker -p 27017:27017 -p 28017:28017 -e MONGO_INITDB_ROOT_USERNAME="myuser" -e MONGO_INITDB_ROOT_PASSWORD="mypass" mongo
Connection String: mongodb://myuser:mypass@localhost:27017/admin

## Run crud-mongodb
Create .env file from .env.example
npm install
npm start