const rates = [0.1, 0.2, 0.3, 0.4];

function calculateTotalPrice(userRate, ratesByEmoticon, emoticons) {
  return ratesByEmoticon.reduce((acc, rate, index) => {
    if (rate >= userRate / 100) {
      return acc + (1 - rate) * emoticons[index];
    } else {
      return acc;
    }
  }, 0);
}

function solution(users, emoticons) {
  let maxUsers = 0;
  let maxRevenue = 0;

  const findBestRateCombination = (currentRates) => {
    if (currentRates.length === emoticons.length) {
      let currentUserCount = 0;
      let currentRevenue = 0;

      users.forEach(([userRate, userThreshold]) => {
        const totalPrice = calculateTotalPrice(
          userRate,
          currentRates,
          emoticons
        );

        if (totalPrice >= userThreshold) {
          currentUserCount += 1;
        } else {
          currentRevenue += totalPrice;
        }
      });

      if (currentUserCount > maxUsers) {
        maxUsers = currentUserCount;
        maxRevenue = currentRevenue;
      } else if (currentUserCount === maxUsers) {
        maxRevenue = Math.max(maxRevenue, currentRevenue);
      }

      return;
    }

    rates.forEach((rate) => {
      findBestRateCombination([rate, ...currentRates]);
    });
  };

  findBestRateCombination([]);

  return [maxUsers, maxRevenue];
}

solution(
  [
    [40, 2900],
    [23, 10000],
    [11, 5200],
    [5, 5900],
    [40, 3100],
    [27, 9200],
    [32, 6900],
  ],
  [1300, 1500, 1600, 4900]
); //?
