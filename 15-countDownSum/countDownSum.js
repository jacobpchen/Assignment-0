class MySolution {
  countDownSum(num) {
    // Insert code here;
    if (num <= 1)
      return num;
    else
      return num + this.countDownSum(num - 1)
  }
}

let studentSolution = new MySolution();
console.log(studentSolution.countDownSum(10))