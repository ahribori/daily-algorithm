function solution(numbers, target) {
  let answer = 0;

  function dfs(original, value, i) {
    if (i === original.length) {
      if (value === target) {
        answer++;
      }
      return;
    }
    dfs(original, value + original[i], i + 1);
    dfs(original, value - original[i], i + 1);
  }

  dfs(numbers, numbers[0], 1);
  dfs(numbers, -numbers[0], 1);

  return answer;
}

solution([1, 1, 1, 1, 1], 3);
