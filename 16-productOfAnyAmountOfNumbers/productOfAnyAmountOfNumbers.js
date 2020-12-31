function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var nums = args
  var product = nums[0]
  for (i = 0; i < (nums.length - 1); i++) {
    product *= nums[i + 1]
  }
  console.log(product)
  return product
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
productOfAnyAmountOfNumbers([2, 4, 6])