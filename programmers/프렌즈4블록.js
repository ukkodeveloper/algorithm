function solution(m, n, board) {
  let answer = 0;
  let listToErase = [];

  for (let row = 0; row < board.length; row++) {
    board[row] = board[row].split('');
  }

  helper();

  function helper() {
    //1. check
    for (let row = 0; row < board.length - 1; row++) {
      for (let col = 0; col < board[0].length - 1; col++) {
        const current = board[row][col];
        if (current === '') continue;

        const one = board[row + 1][col + 1];
        const two = board[row][col + 1];
        const three = board[row + 1][col];

        if (current === one && current === two && current === three) {
          listToErase.push([row, col]);
          listToErase.push([row + 1, col]);
          listToErase.push([row, col + 1]);
          listToErase.push([row + 1, col + 1]);
        }
      }
    }

    //2. erase
    listToErase.forEach(([row, col]) => {
      if (board[row][col] === '') return;

      board[row][col] = '';
      answer += 1;
    });

    if (listToErase.length === 0) {
      return;
    }

    listToErase = [];

    //3. down
    for (let col = 0; col < board[0].length; col++) {
      let colString = '';
      for (let row = 0; row < board.length; row++) {
        colString += board[row][col];
      }

      const baseIndex = board.length - colString.length;
      for (let row = 0; row < board.length; row++) {
        if (row < baseIndex) {
          board[row][col] = '';
        } else {
          board[row][col] = colString[row - baseIndex];
        }
      }
    }

    return helper();
  }

  return answer;
}
