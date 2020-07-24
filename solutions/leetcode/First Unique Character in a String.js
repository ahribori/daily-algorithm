/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const candidate = [];
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (!map.has(item)) {
      candidate.push(item);
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }

  let answer = -1;
  for (let i = 0; i < candidate.length; i++) {
    const c = candidate[i];
    if (map.get(c) === 1) {
      answer = s.indexOf(c);
      break;
    }
  }
  return answer;
};

// firstUniqChar('leetcode');
firstUniqChar('loveleetcode');
