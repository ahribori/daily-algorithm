/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
  let result = 0;
  const jewelSet = new Set();

  for (let i = 0; i < J.length; i++) {
    jewelSet.add(J[i]);
  }

  for (let j = 0; j < S.length; j++) {
    if (jewelSet.has(S[j])) {
      result++;
    }
  }
  return result;
};

numJewelsInStones('aA', 'aAAbbbb');
