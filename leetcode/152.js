const maxProduct = (nums) => {
  let result = nums[0];
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i];
    [min, max] = [
      Math.min(curNum, min * curNum, max * curNum),
      Math.max(curNum, min * curNum, max * curNum),
    ];

    result = Math.max(max, result);
  }
  return result;
};
