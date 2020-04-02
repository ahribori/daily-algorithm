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

function singleNumber2(nums) {
  return nums.reduce((acc, curr) => {
    return acc ^ curr;
  });
}

singleNumber2([2, 2, 1]);
singleNumber2([4, 1, 2, 1, 2]);
