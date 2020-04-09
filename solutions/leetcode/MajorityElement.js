function majorityElement(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const map = new Map();
  const length = nums.length;
  let isMajority = false;

  for (let i = 0; i < length; i++) {
    const n = nums[i];
    const count = map.get(n);
    if (!!count) {
      isMajority = count + 1 > length / 2;
      map.set(n, count + 1);
    } else {
      map.set(n, 1);
    }
    if (isMajority) {
      return n;
    }
  }
}

majorityElement([3, 2, 3]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);
majorityElement([4]);
