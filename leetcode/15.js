const threeSum = (nums) => {
  const result = [];
  // ! 실수: sort comparison function를 잊지 말자.
  const numList = nums.sort((a, b) => a - b);

  for (let i = 0; i < numList.length - 2; i++) {
    let left = i + 1;
    let right = numList.length - 1;
    const curVal = numList[i];

    // ! 중복된 값을 포함시키지 않아야 한다.(1)
    if (i > 0 && numList[i - 1] === numList[i]) continue;

    while (left < right) {
      const leftVal = numList[left];
      const rightVal = numList[right];

      if (curVal + leftVal + rightVal === 0) {
        result.push([curVal, leftVal, rightVal]);
        left += 1;

        // ! 중복된 값을 포함시키지 않아야 한다.(2)
        while (leftVal === numList[left]) {
          left += 1;
        }
        continue;
      }

      if (curVal + leftVal + rightVal > 0) {
        right -= 1;
        continue;
        // ! 실수: continue를 하지 않으면 아래 left 포인터도 인덱스가 하나 증가한다.
      }

      left += 1;
    }
  }

  return result;
};
