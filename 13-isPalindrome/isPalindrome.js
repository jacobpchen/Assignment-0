function isPalindrome(word) {
  // Insert code here;
  var front = 0
  var back = word.length - 1
  for (i = 0; i < word.length / 2; i++) {
    if (!(word[front] == word[back]))
      return false
    else {
      front++
      back--
    }
  }
  return true
}

// Do not edit this line;
module.exports = isPalindrome;