const eraseOverlapIntervals = (intervals) => {
  // step0. edge case
  if (intervals.length <= 1) return 0;

  intervals.sort((a, b) => a[0] - b[0]);

  let result = 0;
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[0] < end) {
      result++;
      end = Math.min(interval[1], end);
    } else {
      end = interval[1];
    }
  }

  return result;
};

eraseOverlapIntervals([
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4],
]); //?
