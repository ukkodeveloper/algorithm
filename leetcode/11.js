const maxArea = (heights) => {
  let left = 0;
  let right = heights.length - 1;
  let result = 0;

  while (left < right) {
    const area = (right - left) * Math.min(heights[left], heights[right]);
    result = Math.max(area, result);
    if (heights[left] >= heights[right]) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return result;
};
