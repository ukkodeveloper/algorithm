const plus = (a, b) => a + b;

const getSum_loop = (min, max, start, cal) => {
  for (let i = min; i <= max; i++) {
    start = cal(start, i);
  }

  return start;
};

const getSum_recursion = (min, max, start, cal) => {
  if (min > max) return start;

  return getSum_recursion(min + 1, max, cal(start, min), cal);
};

const range = (min, max) => {
  return Array.from({ length: max - min + 1 }, (_, idx) => idx + min);
};

const getSum_Composition = (arr, start, cal) => {
  return arr.reduce((acc, cur) => cal(acc, cur), 0) + start;
};

getSum_loop(5, 10, 100, plus); //?
getSum_recursion(5, 10, 100, plus); //?

getSum_Composition(range(5, 10), 100, plus); //?
