const solve = (n) => {
  if (n < 1 || n > 100) return undefined;

  let count = 0;
  for (let i = 0; i < n; i++) {
    count = 2 * count + 1;
  }

  if (n <= 20) {
    const board = {
      1: [],
      2: [],
      3: [],
    };

    for (let i = 1; i <= n; i++) {
      board[1].push(i);
    }
  }

  return count;
};

solve(10); //?
