const {gql} = require('apollo-server');

// // Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String,
    # rollThreeDice: [Int]
  }
  `;

//   type Mutation {
//     rollDice(numDice: Int!, numSides: Int): [Int]
//   }

module.exports = typeDefs;