const solution = x => {
  const arr = x.toString().split('');
  const length = arr.length;
  if (arr[0] === '-') {
    return false;
  }
  for (let i = 0; i < length; i++) {
    const reverseI = length - i - 1;
    if (arr[i] !== arr[reverseI]) {
      return false;
    }
    if (i === reverseI || i > reverseI) {
      return true;
    }
  }
};

solution(0);
solution(11);
solution(121);
solution(-121);
solution(10);
