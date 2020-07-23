/**
 * @param {string} s
 * @return {number}
 */

// 26진수
const titleToNumber = function (s) {
  const arr = s.split('').reverse();
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    const num = char.charCodeAt() - 64;
    answer = answer + num * (26 ** i);
  }
  return answer;
};

titleToNumber('A');
titleToNumber('AB');
titleToNumber('ZY');
