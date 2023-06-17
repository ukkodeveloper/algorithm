const spiralOrder = (matrix) => {
  let result = [];

  let colStart = 0;
  let rowStart = 0;
  let colEnd = matrix[0].length - 1;
  let rowEnd = matrix.length - 1;
  let direction = 'right';

  // right
  // rowStart/ colStart - colEnd
  // rowStart++
  // direction

  // down
  // colEnd/ rowStart - rowEnd
  // colEnd--
  // direction

  // left
  // rowEnd/ colEnd - colStart
  // rowEnd--
  // direction

  // up
  // colStart / rowEnd - rowStart
  // colStart++
  // direction

  while (colStart <= colEnd && rowStart <= rowEnd) {
    switch (direction) {
      case 'right': {
        for (let i = colStart; i <= colEnd; i++) {
          result.push(matrix[rowStart][i]);
        }
        rowStart += 1;
        direction = 'down';
        break;
      }
      case 'down': {
        for (let i = rowStart; i <= rowEnd; i++) {
          result.push(matrix[i][colEnd]);
        }
        colEnd -= 1;
        direction = 'left';
        break;
      }
      case 'left': {
        for (let i = colEnd; i >= colStart; i--) {
          result.push(matrix[rowEnd][i]);
        }
        rowEnd -= 1;
        direction = 'up';
        break;
      }
      case 'up': {
        for (let i = rowEnd; i >= rowStart; i--) {
          result.push(matrix[i][colStart]);
        }
        colStart += 1;
        direction = 'right';
        break;
      }
      default: {
        throw new Error(
          `[ERROR] 알수 없는 direction 입니다. (right, down, left, up 중 하나)`
        );
      }
    }
  }

  return result;
};

spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); //?

spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]); //?
