function pairSum(nums, target) {
  // Insert code here;
  if (nums.length <= 1)
    throw 'Need more than 1 number in the array to calculate a sum.'

  for (i = 0; i < nums.length; i++)
    for (j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target)
        return true
    }
  return false
}

// Do not edit this line;
module.exports = pairSum;
console.log(pairSum([0, 1, 2, 4, 5], 8))