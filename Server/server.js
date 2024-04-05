//bring in apollo server
const {ApolloServer} = require('apollo-server');

// bring in typedefs and resolvers
const {typeDefs, resolvers} = require('../graphql/index');

const server = new ApolloServer({
  typeDefs, resolvers,
});

server.listen().then(({url})=>{
  console.log(`server ready on: ${url}` )
});