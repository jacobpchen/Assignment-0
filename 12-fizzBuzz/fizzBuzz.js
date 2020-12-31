function fizzBuzz(start, end) {
  // Insert code here;
  var fizzBuzzArr = new Array()
  for (i = start; i <= end; i++) {
    if (i % 3 == 0 & i % 5 == 0)
      fizzBuzzArr.push("FizzBuzz")
    else if (i % 5 == 0)
      fizzBuzzArr.push("Buzz")
    else if (i % 3 == 0)
      fizzBuzzArr.push("Fizz")
    else
      fizzBuzzArr.push(i)
  }
  return fizzBuzzArr

}

// Do not edit this line;
module.exports = fizzBuzz;
