// To handle GraphQL queries, 
//we need a schema that defines 
//the Query type, and we need an 
//API root with a function called 
//a “resolver” for each API endpoint. 
//For an API that just returns “Hello world!”, 
//we can put this code in a file named server.js

var {buildSchema, graphql} = require("graphql");

//construct the schema / type definitions using gql :
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

//construct the root value as a resolver function
var resolverRootValue = {
  hello(){
    return "Yello world!"
  }
}

//run the gql query `{hello}` 
//and get the response: "Yello world!"
graphql({
  schema,
  source: "{hello}",
  resolverRootValue,
}).then(response=>{
   console.log(response);
})