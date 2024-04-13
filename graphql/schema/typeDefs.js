const {gql} = require('apollo-server');

// // Construct a schema, using GraphQL schema language
const typeDefs = gql(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    hello: String,
    rollDice(numDice: Int!, numSides: Int): [Int]
    calculateSum(a: Int!, b: Int!): Int!
    getDie(numSides: Int!): RandomDie
  }
`)

module.exports = typeDefs;