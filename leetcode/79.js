const exist = (board, word) => {
  let result = false;

  const dfs = ([row, col], word) => {
    if (word.length === 0) {
      result = true;
      return;
    }

    if (
      row < 0 ||
      row > board.length - 1 ||
      col < 0 ||
      col > board[0].length - 1 ||
      board[row][col] !== word[0] ||
      result
    ) {
      return;
    }

    const tempt = board[row][col];
    board[row][col] = '';
    const newWord = word.slice(1);

    dfs([row + 1, col], newWord);
    dfs([row - 1, col], newWord);
    dfs([row, col + 1], newWord);
    dfs([row, col - 1], newWord);

    board[row][col] = tempt;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      dfs([row, col], word);
    }
  }
  return result;
};

exist(
  [
    ['C', 'A', 'A'],
    ['A', 'A', 'A'],
    ['B', 'C', 'D'],
  ],
  'AAB'
);
