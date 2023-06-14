const [_, ...input] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const getIsPalindrome = (count, str) => {
  if (str.length === 0 || str.length === 1) {
    return {
      isPalindrome: 1,
      count,
    };
  }

  if (str[0] !== str[str.length - 1]) {
    return {
      isPalindrome: 0,
      count,
    };
  }

  return getIsPalindrome(++count, str.slice(1, -1));
};

const solve = (input) => {
  let result = '';
  input.forEach((str) => {
    const { isPalindrome, count } = getIsPalindrome(1, str);
    result += `${isPalindrome} ${count}\n`;
  });

  return result;
};

console.log(solve(input));
