function setUnionOfAnyAmountOfSets(...args) {
  var array = args
  let combinedSet = new Set()
  for (const index in args) {
    for (const element of args[index]) {
      combinedSet.add(element)
    }
  }
  return combinedSet
}

module.exports = setUnionOfAnyAmountOfSets;
