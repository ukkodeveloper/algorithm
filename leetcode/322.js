// coins로 조합의 모든 경우의 수를 구하려고 했음.
// 그러나, amount를 기준으로 bottom-up으로 풀면 dp로 쉽게 풀 수 있다.

const coinChange = (coins, amount) => {
  if (amount === 0) return 0;

  const dp = [0];

  for (let i = 1; i <= amount; i++) {
    dp[i] = Infinity;
    for (const coin of coins) {
      const index = i - coin;
      if (index < 0) continue;

      dp[i] = Math.min(dp[index] + 1, dp[i]);
    }
  }

  const result = dp.pop();
  dp;

  if (result === Infinity) return -1;
  return result;
};
