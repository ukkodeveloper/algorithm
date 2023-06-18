const maxArea = (heights) => {
  let result = 0;

  for (let i = 0; i < heights.length - 1; i++) {
    const left = heights[i];
    let maxRight = 0;

    for (let j = heights.length - 1; j > i; j--) {
      const right = heights[j];
      if (right < maxRight) continue;

      const area = (j - i) * Math.min(left, right);
      result = Math.max(area, result);
    }
  }

  return result;
};
