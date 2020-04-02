const lengthOfLastWord = function (s) {
  if (!s || s.trim() === '') return 0;
  const splited = s.trim().split(' ');
  return splited[splited.length - 1].length;
};

lengthOfLastWord('Hello World');
lengthOfLastWord('Daniel ');
lengthOfLastWord('              ');
