const maxSubArray = (nums) => {
  if (nums.every((num) => num < 0)) {
    return Math.max(...nums);
  }

  let maxSum = nums[0];
  let curSum = 0;

  for (const num of nums) {
    curSum += num;

    if (curSum < 0) curSum = 0;

    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
};
