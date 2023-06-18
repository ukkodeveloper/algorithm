const maxProfit = (prices) => {
  let profit = 0;
  let buyingPrice = Infinity;

  for (let i = 1; i < prices.length; i++) {
    const sellingPrice = prices[i];
    buyingPrice = Math.min(buyingPrice, prices[i - 1]);
    profit = Math.max(profit, sellingPrice - buyingPrice);
  }

  return profit > 0 ? profit : 0;
};
