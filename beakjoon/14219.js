const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const solve = (input) => {
  const [width, length] = input.split(" ").map(Number);

  const count = width * length;

  return count % 3 === 0 ? "YES" : "NO";
}

console.log(solve(input));