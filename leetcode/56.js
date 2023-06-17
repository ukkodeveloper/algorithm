const sortMatrix = (matrix) => matrix.sort((a, b) => a[0] - b[0]);

const merge = (intervals) => {
  if (intervals.length === 1) return intervals;

  // 1. sort
  const intervalsSorted = sortMatrix(intervals);

  let prevInterval = intervals[0];
  const result = [prevInterval];

  // 2. loop
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervalsSorted[i];
    // 2-1. if) overlapped
    if (currentInterval[0] <= prevInterval[1]) {
      prevInterval[1] = Math.max(currentInterval[1], prevInterval[1]);
    } else {
      // 2-2. if) not overlapped
      prevInterval = currentInterval;
      result.push(prevInterval);
    }
  }

  return result;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]); //?

merge([
  [1, 4],
  [4, 5],
]); //?

merge([
  [1, 4],
  [0, 4],
]); //?
