// const fs = require('fs');
// const [target, divider] = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

const solve = (target, divider) => {
  const targetNumber = Number(target.slice(0, -2) + '00');
  const dividerNumber = Number(divider);

  const remainder = targetNumber % dividerNumber;

  if (remainder === 0) {
    return '00';
  }

  const result = String(dividerNumber - remainder);

  return result.length === 2 ? result : '0' + result;
};

// console.log(solve(target, divider));
