// case1
// 고냥 재귀
const sumRange = (until: number): number => {
  if (until === 1) {
    return 1;
  }
  return until + sumRange(--until);
};

sumRange(10); //?

// 꼬리 재귀
const sumRange_tail = (sum: number, until: number): number => {
  if (until === 0) {
    return sum;
  }

  return sumRange_tail(sum + until, --until);
};

sumRange_tail(0, 10); //?

// case2 helper
// 고냥 재귀함수
const collectOdd = (arr: number[]): number[] => {
  const result: number[] = [];

  const helper = (arr: number[]) => {
    if (arr.length === 0) return;

    const [target, ...rest] = arr;

    if (target % 2 === 1) result.push(target);

    helper(rest);
  };

  helper(arr);

  return result;
};

collectOdd([1, 2, 3, 4, 5]); //?

// 꼬리재귀
const collectOdd_tail = (total: number[], arr: number[]) => {
  if (arr.length === 0) return total;

  const [target, ...rest] = arr;
  if (target % 2 === 1) total.push(target);

  return collectOdd_tail(total, rest);
};

collectOdd_tail([], [1, 2, 3, 4, 5]); //?
