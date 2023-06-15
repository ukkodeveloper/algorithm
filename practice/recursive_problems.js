// problem1
// power
const power = (a, b) => {
  let total = 1;

  if (a === 1) return 1;
  if (a === 0) return 0;

  const helper = (a, b) => {
    if (b < 1) {
      return total;
    }

    total *= a;

    return helper(a, --b);
  };

  helper(a, b);

  return total;
};

power(2, 4); //?

// problem2
// power_tail
const power_tail = (total, a, b) => {
  if (a === 0) return 0;
  if (a === 1) return 1;
  if (b < 1) return total;

  return power_tail(total * a, a, --b);
};

power_tail(1, 1, 4); //?

const productOfArray = (total, arr) => {
  if (arr.length === 0) return total;

  return productOfArray(total * arr.pop(), arr);
};

productOfArray(1, [1, 2, 3, 10]);

// problem3
const recursiveRange = (sum, end) => {
  if (end === 0) return sum;

  return recursiveRange(sum + end, --end);
};

recursiveRange(0, 10); //?

// problem4
const fib = (order) => {
  const dp = [1, 1];
  if (order <= 1) return 1;

  const helper = (restOrder, prev) => {
    if (restOrder === 0) {
      return prev[1];
    }

    return helper(--restOrder, [prev[1], prev[0] + prev[1]]);
  };

  return helper(order - 2, dp);
};

fib(35);

// problem5
const reverse = (reversed, str) => {
  if (str.length === 0) return reversed;

  return reverse(reversed + str[str.length - 1], str.slice(0, -1));
};

//problem6
const isPalindrome = (str) => {
  if (str.length === 1) return true;
  if (str.length === 2 && str[0] === str[1]) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, -1));
};

isPalindrome('awesome'); //?
isPalindrome('foobar'); //?
isPalindrome('tacocat'); //?
isPalindrome('amanaplanacanalpanama'); //?
isPalindrome('amanaplanacanalpandemonium'); //?

// problem7
const someRecursive = (arr, fn) => {
  if (arr.length === 0) return false;
  return fn(arr.pop()) ? true : someRecursive(arr, fn);
};

const isOdd = (val) => val % 2 !== 0;
someRecursive([1, 2, 3, 4], isOdd); //?
someRecursive([4, 6, 8, 9], isOdd); //?
someRecursive([4, 6, 8], isOdd); //?
someRecursive([4, 6, 8], (val) => val > 10); //?

// problem8

[1].slice(1).length; //?

// 문제1 -> nested recursive 일 때 acc 를 리턴하는 게 맞나?
// 문제2 -> nested recursive 일 때 acc가 보존되지 않는 것 같음.
// GPT change....

// 빈배열 spread operator => []

const flatten = (acc, arr) => {
  if (arr.length === 0) {
    return acc;
  }

  const [head, ...tail] = arr;

  if (Array.isArray(head)) {
    return flatten(acc, [...head, ...tail]);
  } else {
    return flatten([...acc, head], tail);
  }
};

flatten([], [1, [2, [3, 4], [[5]]]]); //?
flatten([], [[1], [2], [3]]); //?
flatten([], [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); //?

// problem9

const capitalizeHelper = (cur, arr) => {
  if (arr.length === 0) return cur;

  const word = arr.pop();
  return capitalizeHelper([word[0].toUpperCase() + word.slice(1), ...cur], arr);
};
capitalizeHelper([], ['car', 'taco', 'banana']); //?

const reverseString = (s) => {
  let count = s.length;
  const helper = (s) => {
    if (count === 1) return s;
    count--;

    const a = s.pop();
    s.unshift(a);
    return helper(s);
  };
  return helper(s);
};

reverseString(['h', 'e', 'l', 'l', 'o']); //?
