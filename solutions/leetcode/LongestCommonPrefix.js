/**
 * 공통된 접두사를 구해라
 */
function longestCommonPrefix(strs) {
  const result =
    strs.length > 0
      ? strs.reduce((prev, next) => {
          return lcp(prev, next);
        })
      : '';
  console.log('result=', result);
  return result;
}

function lcp(a, b) {
  const minLength = a.length > b.length ? b.length : a.length;
  let i = 0;
  while (i < minLength) {
    if (a[i] !== b[i]) {
      return a.slice(0, i);
    }
    i++;
  }
  return a.length > b.length ? b : a;
}

longestCommonPrefix(['flower', 'flow', 'flight']);
longestCommonPrefix(['dog', 'racecar', 'car']);
longestCommonPrefix([]);
longestCommonPrefix(['', 'b']);
longestCommonPrefix(['a']);
longestCommonPrefix(['c', 'c']);
