/* eslint-disable no-undef */
const fs = require('fs');

const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const solve = (num) => {
  const fib = (prev, next, target) => {
    if (target === 0) return prev;

    return fib(next, prev + next, --target);
  };

  return fib(0n, 1n, num);
};

console.log(solve(input).toString());
