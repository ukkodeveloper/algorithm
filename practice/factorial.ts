// factorial loop

const factorialLoop = (end: number) => {
  if (end < 1 || !Number.isInteger(end)) return -1;

  let result = 1;

  for (let i = 1; i <= end; i++) {
    result *= i;
  }

  return result;
};

factorialLoop(10);

const factorialRecursive = (total: number, end: number): number => {
  if (end <= 1) {
    return total;
  }
  return factorialRecursive(total * end, end - 1);
};

factorialRecursive(1, 10);
