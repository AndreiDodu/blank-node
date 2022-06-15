# blank-node
A blank nodejs project. 

Modules: apollo server (graphql), express, typeorm 
DBMS: postgreSQL

## Run

`npm install`

`sudo docker-compose up` - starts a docker container with postgreSQL

`npm run start`

## Migrations

`npm run migrationnew` - createas a migration file if it is necessary

`npm run typeorm migration:run` - execute migration scripts




