import config from './config/config';
import resolvers from './resolvers/resolvers';
import typeDefs from './schema/schema';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import cors from 'cors';

import CatFactsAPI from './datasources/catfactsapi';
import DogsAPI from './datasources/dogsapi';
import app from './api/app';
import express from 'express';

export interface ContextValue {
  dataSources: {
    catFactsAPI: CatFactsAPI;
    dogsAPI: DogsAPI;
  };
}

const httpServer = http.createServer(app);
const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const startSever = async () => {
  await server.start();
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        const { cache } = server;
        return {
          dataSources: {
            catFactsAPI: new CatFactsAPI({ cache }),
            dogsAPI: new DogsAPI(),
          },
        };
      },
    }),
  );

  await httpServer.listen({ port: config.port });
  console.log(`[server]: Server is running at http://localhost:${config.port}/${config.apiRoot}`);
};

startSever();
