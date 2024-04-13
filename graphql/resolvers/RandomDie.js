
// Instead of a root-level resolver for 
//the RandomDie type,
// an ES6 class, where the 
//resolvers are instance methods.
class RandomDie {
  constructor(numSides) {
    this.numSides = numSides;
  }
 
  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides)
  }
 
  roll({ numRolls }) {
    var output = []
    for (var i = 0; i < numRolls; i++) {
      output.push(this.rollOnce())
    }
    return output
  }
}
module.exports = {RandomDie};