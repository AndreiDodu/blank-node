import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";


import express from "express";
import { SampleResolver } from "./resolvers/SampleResolver";

async function main() {
  const app = express();
  await createConnection();
  const schema = await buildSchema({ resolvers: [SampleResolver] });

  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app });
  
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  await app.listen(4000);
  
  console.log("Server has started!");
}

main();
