const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require('../graphql/index');

function loggingMiddleware(req, res, next) {
  console.log("ip:", req.ip)
  next()
}
// Create an Express app
const app = express();

//logging middleware
app.use(loggingMiddleware);


// Create an Apollo Server instance, passing in the schema and resolvers
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ req }) => ({
    ip: req.ip,
  }),
  introspection: true,
  formatError: (error) => {
    const { message, path } = error;
    return { message, path };
  },
});

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