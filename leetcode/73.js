const setZeroes = (matrix) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  const colsToZero = [];
  const rowsToZero = [];

  // step1. 0이 포함된 row와 col index를 저장한다.
  matrix.forEach((row, rowIndex) => {
    row.forEach((item, colIndex) => {
      if (item === 0) {
        colsToZero.push(colIndex);
        rowsToZero.push(rowIndex);
      }
    });
  });

  // step2. 저장된 index 리스트를 순회하면서 0으로 변경한다.
  colsToZero.forEach((colIndex) => {
    for (let i = 0; i < rowLength; i++) {
      matrix[i][colIndex] = 0;
    }
  });

  rowsToZero.forEach((rowIndex) => {
    for (let i = 0; i < colLength; i++) {
      matrix[rowIndex][i] = 0;
    }
  });

  return matrix;
};

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]); //?

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]); //?
