const findDisappearedNumbers = function (nums) {
  /**
   * solution 1
   * map으로 만든 다음
   * 없는 애를 찾는다.
   */
  const n = nums.length;
  const map = new Map();
  const answer = [];
  for (let i = 0; i < n; i++) {
    map.set(nums[i], 1);
  }
  for (let k = 1; k <= n; k++) {
    if (!map.has(k)) {
      answer.push(k);
    }
  }
  return answer;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]);
console.log(findDisappearedNumbers([1, 1, 1, 1]), [2, 3, 4]);
