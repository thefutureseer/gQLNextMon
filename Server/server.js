const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require('../graphql/index');

// Create an Express app
const app = express();

// Create an Apollo Server instance, passing in the schema and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Start the Apollo Server before applying middleware
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer().then(() => {
  // Start the Express server
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
  });
}).catch(err => {
  console.error('Error starting server:', err);
});  

  // // bring in typedefs and resolvers
// const {typeDefs, resolvers} = require('../graphql/index');
// const { ApolloServer } = require( '@apollo/server');
// const { expressMiddleware } = require( '@apollo/server/express4');
// const { ApolloServerPluginDrainHttpServer } = require( '@apollo/server/plugin/drainHttpServer');
// const express = require( 'express');
// const http = require( 'http');
// const cors = require( 'cors');
// const bodyParser = require( 'body-parser');

// const app = express();
// const httpServer = http.createServer(app);

// (async () => {
// // Set up Apollo Server
// var server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// });

//   await server.start();
  
//   app.use(
//     cors(),
//     bodyParser.json(),
//     expressMiddleware(server),
//   );
// })();

// (async () =>{
// await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
// console.log(`🚀 Server ready at http://localhost:4000`);
// })();