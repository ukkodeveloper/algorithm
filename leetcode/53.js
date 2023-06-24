const maxSubArray = (nums) => {
  let maxSum = nums[0];
  let prevSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    prevSum = Math.max(prevSum + num, num);
    maxSum = Math.max(maxSum, prevSum);
  }

  return maxSum;
};

// ! before: 0을 기준으로 누적값을 시작할 지 정했다. -> 음수만 있을 경우 따로 처리를 해줘야 했음.
// ! after: 순회하면서 현재값을 더할 지, 새로 시작할 지를 비교해서 정한다.
