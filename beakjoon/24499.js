const fs = require('fs');
const [countInput, pieListInput] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const solve = (countInput, pieListInput) => {
  const count = countInput.split(' ').map(Number).pop();
  const pieList = pieListInput.split(' ').map(Number);

  // 파이 개수보다 먹을 개수가 같거나 많을 경우 전체 파이의 합계
  if (pieList.length <= count) {
    return pieList.reduce((acc, cur) => acc + cur, 0);
  }

  // 초기값 설정
  // sum: 처음 index부터 먹을 개수만큼 초기값 설정
  let max = 0;
  let sum = pieList.slice(0, count).reduce((acc, cur) => acc + cur);

  // 파이 전체를 순회하면서 sum에서 이전 idx를 빼고, 마지막(처음 + 개수) idx를 더한다.
  // 더한 다음 max값 갱신
  for (let prevIdx = 0; prevIdx < pieList.length; prevIdx++) {
    let nextIdx =
      prevIdx + count >= pieList.length
        ? count - pieList.length + prevIdx
        : prevIdx + count;

    sum = sum + pieList[nextIdx] - pieList[prevIdx];

    max = Math.max(max, sum);
  }

  return max;
};

console.log(solve(countInput, pieListInput));
