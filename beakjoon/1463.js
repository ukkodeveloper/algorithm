// const input = Number(require('fs').readFileSync(0));

const solve = (input) => {
  const memo = [0];

  for (let i = 1; i < input; i++) {
    memo.push(
      Math.min(
        memo[i - 1] + 1,
        (i + 1) % 2 === 0 ? memo[(i + 1) / 2 - 1] + 1 : Infinity,
        (i + 1) % 3 === 0 ? memo[(i + 1) / 3 - 1] + 1 : Infinity
      )
    );
  }

  return memo.pop();
};

// console.log(solve(input));
