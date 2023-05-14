const fs = require('fs');
const [_, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solve = (input) => {
  const dollSizeList = input.split(" ").map(Number);

  const countBySize = dollSizeList.reduce((acc, size) => {
    if(acc.has(size)) {
      acc.set(size, acc.get(size) + 1)
    } else {
      acc.set(size, 1)
    }

    return acc;
  },new Map())

  return Math.max(...countBySize.values());
}

console.log(solve(input));