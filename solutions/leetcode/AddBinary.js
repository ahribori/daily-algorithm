const addBinary = function(a, b) {
  const length = a.length > b.length ? a.length : b.length;
  const reversedA = a.split('').reverse();
  const reversedB = b.split('').reverse();
  let temp = 0;
  const output = [];
  for (let i = 0; i < length; i++) {
    const _a = reversedA[i] || 0;
    const _b = reversedB[i] || 0;
    let current = _a * 1 + _b * 1 + temp;
    console.log(_a, _b, temp, current);

    if (current > 1) {
      temp = 1;
      current = current % 2;
    } else {
      temp = 0;
    }
    output.unshift(current);
  }
  if (temp > 0) {
    output.unshift(temp);
  }
  console.log(output);
  return output.join('');
};

// addBinary('11', '1');
// addBinary('1010', '1011');
// addBinary('1111', '1111');
addBinary('1010', '1011');
