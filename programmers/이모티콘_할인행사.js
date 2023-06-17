const RATES = [0.1, 0.2, 0.3, 0.4];

function solution(users, emoticons) {
  const rateCombinations = generateCombinations(RATES, emoticons.length);
  return getMaxResult(users, rateCombinations, emoticons);
}

function* generateCombinations(elements, length) {
  function* helper(combination) {
    if (combination.length === length) {
      yield combination;
      return;
    }

    for (const element of elements) {
      yield* helper([...combination, element]);
    }
  }

  yield* helper([]);
}

function combineEmoticonWithRate(emoticons, rateCombination) {
  if (emoticons.length !== rateCombination.length) {
    throw new Error(`[ERROR] 두 인자의 길이가 같아야 합니다.`);
  }

  return emoticons.map((emoticon, idx) => [emoticon, rateCombination[idx]]);
}

function getCurrentResult(users, emoticonsPriceWithRate) {
  return users.reduce(
    (result, [rateOfUser, threshold]) => {
      const userPrice = getUserPrice(emoticonsPriceWithRate, rateOfUser);

      if (userPrice >= threshold) {
        return Object.assign(result, {
          subscriberCount: result.subscriberCount + 1,
        });
      }

      return Object.assign(result, {
        totalRevenue: result.totalRevenue + userPrice,
      });
    },
    {
      subscriberCount: 0,
      totalRevenue: 0,
    }
  );
}

function getUserPrice(emoticonsPriceWithRate, rateOfUser) {
  return emoticonsPriceWithRate.reduce(
    (totalPrice, [emoticonPrice, emoticonRate]) => {
      if (rateOfUser / 100 <= emoticonRate) {
        return totalPrice + (1 - emoticonRate) * emoticonPrice;
      }

      return totalPrice;
    },
    0
  );
}

function getMaxResult(users, rateCombinations, emoticons) {
  let maxSubscriberCount = 0;
  let maxTotalRevenue = 0;

  for (const rateCombination of rateCombinations) {
    const { subscriberCount, totalRevenue } = getCurrentResult(
      users,
      combineEmoticonWithRate(emoticons, rateCombination)
    );

    if (subscriberCount === maxSubscriberCount) {
      maxTotalRevenue = Math.max(totalRevenue, maxTotalRevenue);
      continue;
    }

    if (subscriberCount > maxSubscriberCount) {
      maxSubscriberCount = subscriberCount;
      maxTotalRevenue = totalRevenue;
      continue;
    }
  }

  return [maxSubscriberCount, maxTotalRevenue];
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
);
