//Context on the server is for all resolvers reusablility:
const contextOne = ({ req }) => {
  console.log("Executing contextOne function");
  
  console.log("a ip:", req.ip);
  return { ip: req.ip };
  }
  
  const contextTwo = ({ req }) => {
    console.log("Executing contextTwo function");
    
    const user = {
      thisis: "me",
      thisIsYou: "you"
    };
    
    req.user = user;
    console.log("and this is Req.user", req.user);
    
    return req;
  } ;
  
  //Function to return all functions in an object:
  const arrayOfContext = ({req})=>{
    console.log("Executing arrayOfContext function");
    const contextData = {
    ...contextOne({req}),
    ...contextTwo({req})
    }
    return contextData;
  }

  module.exports = {
    arrayOfContext
};