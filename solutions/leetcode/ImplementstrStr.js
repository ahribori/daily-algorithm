const strStr = function(haystack, needle) {
  if (!needle) {
    return 0;
  }
  const heyStackLength = haystack.length;
  const needleLength = needle.length;

  for (let i = 0; i < heyStackLength - needleLength + 1; i++) {
    if (haystack.substr(i, needleLength) === needle) {
      return i;
    }
  }
  return -1;
};

strStr('hello', 'll');
strStr('aaaaa', 'bba');
