function countOfAllBooleans(arr) {
  // Insert code here;
  var count = 0
  console.log(arr.length)
  for (i = 0; i < arr.length; i++)
    if (arr[i] === true | arr[i] === false)
      count++
  return count
}

// Do not edit this line;
module.exports = countOfAllBooleans;
countOfAllBooleans([true, false, true, false, true, 7])