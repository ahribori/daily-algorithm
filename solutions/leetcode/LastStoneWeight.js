function lastStoneWeight(stones) {
  if (stones.length === 0) {
    return 0;
  }
  if (stones.length === 1) {
    return stones[0];
  }
  const sortedStones = stones.sort((a, b) => b - a);
  const stoneA = sortedStones.shift();
  const stoneB = sortedStones.shift();

  if (stoneA !== stoneB) {
    sortedStones.push(Math.abs(stoneA - stoneB));
  }
  return lastStoneWeight(sortedStones);
}

const a = lastStoneWeight([2, 7, 4, 1, 8, 1]);
