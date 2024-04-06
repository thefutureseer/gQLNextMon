const {gql} = require('apollo-server');

// // Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String,
    rollDice(numDice: Int!, numSides: Int): [Int]
    calculateSum(a: Int!, b: Int!): Int!
  }
  `

module.exports = typeDefs;