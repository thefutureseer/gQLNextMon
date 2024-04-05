//   Query : {
    //     hello(){
        //       console.log("heoo in console")
        //       return "hello world!"
        //     },
        // //     rollThreeDice: () => [1, 2, 3],
        //   },
        
        //   Mutation: {
            //     rollDice: ({ numDice = 3, numSides = 6 }) => {
                
                //       console.log('Resolver invoked with numDice:', numDice, 'and numSides:', numSides);
                //       try {
                    
                    //         // Validate input parameters
                    //         if (!Number.isInteger(numDice) || numDice <= 0) {
                        //           throw new Error('numDice must be a positive integer');
                        //         }
                        //         if (!Number.isInteger(numSides) || numSides <= 0) {
                            //           throw new Error('numSides must be a positive integer');
                            //         }
                            
                            //         // Generate dice rolls
                            //         var output = [];
                            //         for (var i = 0; i < numDice; i++) {
                                //           output.push(1 + Math.floor(Math.random() * (numSides || 6)));
                                //         }
                                //         console.log("this is output: ", output);
                                //         return output;
                                //       } catch (error) {
                                    //         // If an error occurs during execution, return the error message
                                    //         throw new Error(`Failed to roll dice: ${error.message}`);
                                    //       }
                                    //     }
                                    //   }
                                    // };
                                    
                                    // The root provides a resolver function for each API endpoint
const resolvers = {
    Query: {
            hello() {
                return "Hello world!"
            }
    }
    
}
module.exports = resolvers;