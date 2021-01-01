function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var setUnion = new Set()
  for (var i in args) {
    console.log(args[i])
  }
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
console.log(setUnionOfAnyAmountOfSets({ 1: 2 }, { 2: 3 }))