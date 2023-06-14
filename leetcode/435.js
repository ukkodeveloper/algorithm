const eraseOverlapIntervals = (intervals) => {
  // step0. edge case
  if (intervals.length <= 1) return 0;

  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  // step1. set HashMap countOverlapped by index.
  const countByIndex = {};
  let result = 0;

  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];

    for (let j = i + 1; j < intervals.length; j++) {
      const compared = intervals[j];

      if (compared[0] < current[1]) {
        if (!countByIndex[i]) countByIndex[i] = [];
        if (!countByIndex[j]) countByIndex[j] = [];

        countByIndex[i].push(j);
        countByIndex[j].push(i);
      }
    }
  }

  countByIndex;
  // step2. erase relation and count until there is no relation.
  // eslint-disable-next-line no-constant-condition
  while (true) {
    countByIndex;
    let maxLength = 0;
    let maxIndex;
    let range;

    for (const [index, value] of Object.entries(countByIndex)) {
      if (value.length > maxLength) {
        maxLength = value.length;
        maxIndex = index;
      }
    }

    if (maxLength === 0) return result;

    countByIndex[maxIndex].forEach((index) => {
      countByIndex[index] = countByIndex[index].filter(
        (item) => item != maxIndex
      );
    });

    countByIndex[maxIndex] = [];

    result++;
  }
};

// eraseOverlapIntervals([
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 3],
// ]);
eraseOverlapIntervals([
  [0, 2],
  [1, 3],
  [1, 3],
  [2, 4],
  [3, 5],
  [3, 5],
  [4, 6],
]); //?
