function singleNumber(nums) {
  const map = new Map();
  nums.forEach((num) => {
    if (!map.get(num)) {
      map.set(num, true);
    } else {
      map.set(num, false);
    }
  });
  for (const [k, v] of map) {
    if (v) {
      return k;
    }
  }
}

singleNumber([2, 2, 1]);
singleNumber([4, 1, 2, 1, 2]);
