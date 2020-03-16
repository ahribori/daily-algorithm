const reverse = function(x) {
  const arrayFromNumber = x.toString().split('');
  const isPositive = arrayFromNumber[0] !== '-';
  if (!isPositive) {
    arrayFromNumber.shift();
  }
  const reversed = arrayFromNumber.reverse().join('');
  const result = isPositive ? reversed : '-' + reversed;

  if (Number(result) > 2147483648 || Number(result) < -2147483648) {
    return 0;
  }

  return Number(result);
};

reverse(123);
reverse(-123);
reverse(120);
reverse(1534236469);
