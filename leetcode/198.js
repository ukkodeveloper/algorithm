const rob = (nums) => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const dp = [nums[0], nums[1], nums[0] + nums[2]];

  for (let i = 3; i < nums.length; i++) {
    dp.push(Math.max(dp[i - 2] + nums[i], dp[i - 3] + nums[i]));
  }

  return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
};
