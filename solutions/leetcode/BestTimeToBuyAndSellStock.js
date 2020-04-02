function maxProfit(prices) {
  let min = 99999999;
  let profit = 0;
  prices.forEach((price) => {
    if (price < min) {
      min = price;
    }
    if (price - min > profit) {
      profit = price - min;
    }
    console.log(min, profit);
  });
  return profit;
}

// maxProfit([7,1,5,3,6,4]);
maxProfit([7, 6, 4, 3, 1]);
