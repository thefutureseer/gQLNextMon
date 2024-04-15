var {RandomDie} = require('./RandomDie');
const {Message} = require('./MessageClass');

var fakeDatabase = {
  messages: [
    { id: '1', content: 'First message', author: "dude" }
  ]
};

// The root/parent provides the top-level API endpoints
// // A map of functions which return data for the schema.
const resolvers = {
  Query : {
    //Get everything in fake database
    getAllMessages: (_____, args)=>{

      return fakeDatabase;
    },
    //Get a message by id
    getMessage: (___, { id }) => {
      if (!fakeDatabase[id]) {
        throw new Error("no message exists with id " + id)
      }
      return new Message(id, fakeDatabase[id])
    },
    hello: () => {
        console.log("heoo in console")
        return "hello world!"
  },

  calculateSum: (parent, args, context,info) => {
    const {a, b} = args
    return a + b;
  },

  rollDice: (root, args , context, info ) => {
    const {numDice, numSides} = args;
    console.log("heoo in console #2", args);
    try {
    console.log('Resolver invoked with numDice:', numDice, 'and numSides:', numSides);

    // Validate input parameters
        if (!Number.isInteger(numDice) || numDice <= 0) {
        throw new Error('numDice must be a positive integer');
    }
        if (!Number.isInteger(numSides) || numSides <= 0) {
            throw new Error('numSides must be a positive integer');
    }
        // Generate dice rolls
        var output = [];
        for (var i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (numSides || 6)));
        }
        console.log("this is output: ", output);
        return output;
      } catch (error) {
        // If an error occurs during execution, return the error message
        throw new Error(`Failed to roll dice: ${error.message}`);
      }
      return output;
    },

    getDie: (_, { numSides }) => {
        return new RandomDie(numSides)
      },
  },

  RandomDie: {
    numSides: (obj) => {
      return obj.numSides;
    },
    rollOnce: (obj) => {
      return obj.rollOnce();
    },
    roll: (obj, { numRolls }) => {
      return obj.roll({ numRolls });
    },
  },
  
  Mutation: {
      // //Set "message" on to the object of fakeDatabase
      // setMessage: (____, { message }) => {
      //   fakeDatabase.messages = message
      //   return message
      // },
      //Create a new one
      createMessage(_, { input }) {
        // Create a random id for our "database".
        var id = require("crypto").randomBytes(10).toString("hex")
     
        fakeDatabase[id] = input
          // Add the message to the messages array in fakeDatabase
        fakeDatabase.messages.push({ id, ...input });

        return new Message(id, input)
      },
      //Update an old one
      updateMessage(__, { id, input }) {
        if (!fakeDatabase[id]) {
          throw new Error("no message exists with id " + id)
        }
        // This replaces all old data, but some apps might want partial update.
        fakeDatabase[id] = input
        return new Message(id, input)
      },
    }
};
module.exports = {resolvers};