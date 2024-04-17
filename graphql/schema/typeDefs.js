const {gql} = require('apollo-server');

// // Construct a schema, using GraphQL schema language
const typeDefs = gql(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    ip: String
    hello: String
    rollDice(numDice: Int!, numSides: Int): [Int]
    calculateSum(a: Int!, b: Int!): Int!
    getDie(numSides: Int!): RandomDie
    getMessage(id: ID!): Message
    getAllMessages: fakeDatabase!
  }

  type fakeDatabase {
    messages: [Message!]!
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
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`)

module.exports = typeDefs;