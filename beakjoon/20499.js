const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solve = (input) => {
  const [kill, death, assist] = input.split('/').map(Number);

  if (kill + assist < death || death === 0) {
    return 'hasu';
  }

  return 'gosu';
};

console.log(solve(input));
