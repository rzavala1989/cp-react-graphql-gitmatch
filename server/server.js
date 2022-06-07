const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const express = require('express');
const http = require('http');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: authMiddleware,
  });

  await server.start();
  server.applyMiddleware({ app });
  db.once('open', () => {
    app.listen(4000, () => {
      console.log('Running on port 4000');
      console.log(
        `Use GRAPHQL tool on https://localhost:4000${server.graphqlPath}`
      );
    });
  });
}

startApolloServer(typeDefs, resolvers);
