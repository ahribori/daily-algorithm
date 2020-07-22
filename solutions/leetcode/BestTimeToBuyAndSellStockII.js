function maxProfit(prices) {
  let profit = 0;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price < min) {
      min = price;
    } else if (price > min) {
      profit += price - min;
      min = price;
    }
  }
  return profit;
}

// maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([1, 5, 3, 8]);
// maxProfit([1, 2, 3, 4, 5]);
maxProfit([7, 6, 4, 3, 1]);
