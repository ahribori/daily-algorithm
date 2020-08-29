/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const answer = [];
  function backtrack(original, subset, start, sum) {
    if (sum >= target) {
      if (sum === target) {
        answer.push(Object.assign([], subset));
      }
      return;
    }
    for (let i = start; i < original.length; i++) {
      backtrack(original, [...subset, original[i]], i, sum + original[i]);
    }
  }
  backtrack(candidates, [], 0, 0);
  return answer;
};

combinationSum([2, 3, 6, 7], 7);
// combinationSum([2, 3, 5], 8);
