// const fs = require('fs');
// const [firstWord, secondWord] = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

const solve = (firstWord, secondWord) => {
  const chrCountMap = {};
  let countToDelete = 0;

  [...firstWord].forEach((chr) => {
    if (!chrCountMap[chr]) {
      chrCountMap[chr] = 0;
    }

    chrCountMap[chr] += 1;
  });

  [...secondWord].forEach((chr) => {
    if (!chrCountMap[chr]) {
      chrCountMap[chr] = 0;
    }

    chrCountMap[chr] -= 1;
  });

  for (const count of Object.values(chrCountMap)) {
    countToDelete += Math.abs(count);
  }

  return countToDelete;
};

// console.log(solve(firstWord, secondWord));
