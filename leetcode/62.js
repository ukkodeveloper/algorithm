// 가능한 거리의 경우의 수를 구하는 공식 자체 DP다.

const uniquePaths = function (m, n) {
  const row = Math.max(m, n);
  const col = Math.min(m, n);

  const dp = Array.from({ length: row }, (_) => {
    return new Array(col).fill(1);
  });

  for (let i = 1; i < row; i++) {
    const upside = dp[i - 1];
    const downside = dp[i];
    for (let j = 1; j < col; j++) {
      downside[j] = downside[j - 1] + upside[j];
    }
  }

  return dp.flat().pop();
};
