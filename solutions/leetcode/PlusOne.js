const plusOne = (digits) => {
  const length = digits.length;
  for (let i = length - 1; i >= 0; i--) {
    const digit = digits[i];
    if (digit + 1 < 10) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
};

console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([0]));
console.log(plusOne([9]));
console.log(plusOne([1, 9, 9]));
console.log(plusOne([9, 9, 9]));
