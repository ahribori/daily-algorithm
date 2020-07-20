/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies);
  const result = [];

  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= max);
  }

  return result;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
