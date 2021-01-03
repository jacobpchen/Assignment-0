class MySolution {

  countDownSum(num) {
    // Insert code here;
    if (num == 1)
      return num;
    else
      return num + this.countDownSum(num - 1)
  }
}

let StudentSolution = MySolution
module.exports = StudentSolution
// console.log(StudentSolution.countDownSum(10))