const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

const fib = memoize((n) => {
  if (n <= 1) return 1;

  return fib(n - 2) + fib(n - 1);
});
