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
    getMessage: String
  }

  input MessageInput {
    content: String
    author: String
  }
   
  type Message {
    id: ID!
    content: String
    author: String
  }

  type Mutation {
    setMessage(message: String): String
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`)

module.exports = typeDefs;