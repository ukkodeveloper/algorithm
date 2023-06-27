const factorial = (n, start = 1) => {
  if (n <= 1) return start;
  return factorial(n - 1, n * start);
};

const combination = (n, r) => {
  return factorial(n) / (factorial(n - r) * factorial(r));
};

const climbStairs = (n) => {
  if (n === 1) return 1;

  let result = 0;

  const step2Count = Math.floor(n / 2);

  for (let stepTwo = 0; stepTwo <= step2Count; stepTwo++) {
    const stepOne = n - stepTwo * 2;
    result += combination(stepOne + stepTwo, stepTwo);
  }

  return result;
};
