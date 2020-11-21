function findTargetSumWays(nums, S) {
  const memo = new Map();

  function dp(i, sum) {
    const key = `${i}@${sum}`;

    if (memo.has(key)) {
      return memo.get(key);
    }

    if (i === nums.length) {
      return sum === S ? 1 : 0;
    }

    const positive = dp(i + 1, sum + nums[i]);
    const negative = dp(i + 1, sum - nums[i]);

    memo.set(key, positive + negative);

    return positive + negative;
  }

  return dp(0, 0);
}

findTargetSumWays([1, 1, 1, 1, 1], 3);
