// const fs = require('fs');
// const [_, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solve = (input) => {
  const numberList = input.split(' ').map(Number);
  const evenIdxList = [];
  const oddIdxList = [];

  numberList.forEach((num, idx) => {
    if (idx % 2 === 0) {
      evenIdxList.push(num);
    } else {
      oddIdxList.push(num);
    }
  });

  evenIdxList.sort((a, b) => a - b);
  oddIdxList.sort((a, b) => a - b);

  let prev = 0;
  let evenIdx = 0;
  let oddIdx = 0;

  for (let idx = 0; idx < numberList.length; idx++) {
    let current;

    if (idx % 2 === 0) {
      current = evenIdxList[evenIdx++];
    } else {
      current = oddIdxList[oddIdx++];
    }

    if (prev !== current - 1) return 'NO';

    prev = current;
  }

  return 'YES';
};

// console.log(solve(input));
