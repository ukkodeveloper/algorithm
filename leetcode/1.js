const twoSum = (nums, target) => {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (hashMap[num] !== undefined) {
      return [hashMap[num], i];
    }

    hashMap[target - num] = i;
  }
};
