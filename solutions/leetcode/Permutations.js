/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const answer = [];

  function swap(a, b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }

  function permutation(level, start, end) {
    console.log(level, start, end);
    if (level === end) {
      return answer.push(Object.assign([], nums));
    }
    for (let i = start; i < end; i++) {
      swap(i, start);
      permutation(level + 1, start + 1, end);
      swap(i, start);
    }
  }

  permutation(1, 0, nums.length);

  console.log(answer);
  return answer;
}

permute([1, 2, 3]);
