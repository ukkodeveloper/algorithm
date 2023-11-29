// const fs = require('fs');
// const input = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .slice(1);

const solve = (bracketsList) => {
  const results = bracketsList.map((bracketStr) => {
    if (bracketStr.length % 2 !== 0) return 'NO';
    const brackets = [...bracketStr];

    const stack = [];
    while (brackets.length > 0) {
      const bracket = brackets.pop();

      if (bracket === ')') {
        stack.push(')');
        continue;
      }

      if (stack.pop() === undefined) {
        return 'NO';
      }
    }

    return 'YES';
  });

  results.forEach((result) => {
    console.log(result);
  });
};
