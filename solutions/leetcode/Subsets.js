/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const answer = [];

  function dfs(level, start, path) {
    answer.push(path);
    for (let i = start; i < nums.length; i++) {
      dfs(level + 1, i + 1, path.concat([nums[i]]));
    }
  }

  dfs(1, 0, []);

  return answer;
};

subsets([1, 2, 3]);
