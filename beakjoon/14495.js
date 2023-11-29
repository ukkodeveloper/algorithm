// const fs = require('fs');
// const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solve = (input) => {
  const target = Number(input);
  const dp = [1n, 1n, 1n];
  if (target <= 3) return 1;

  for (let i = 3; i < input; i++) {
    dp[i] = dp[i - 3] + dp[i - 1];
  }

  return dp.pop();
};

// console.log(solve(input).toString());
