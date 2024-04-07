// bring in typedefs and resolvers
const {typeDefs, resolvers} = require('../graphql/index');
const { ApolloServer } = require( '@apollo/server');
const { expressMiddleware } = require( '@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require( '@apollo/server/plugin/drainHttpServer');
const express = require( 'express');
const http = require( 'http');
const cors = require( 'cors');
const bodyParser = require( 'body-parser');

// // The GraphQL schema
// const typeDefs = `#graphql
//   type Query {
//     hello: String
//   }
// `;

// // A map of functions which return data for the schema.
// const resolvers = {
//   Query: {
//     hello: () => 'world',
//   },
// };

const app = express();
const httpServer = http.createServer(app);

(async () => {
// Set up Apollo Server
var server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

  await server.start();
  
  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server),
  );
})();

(async () =>{
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);
})();