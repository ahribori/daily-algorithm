const stringShift = function (s, shift) {
  const sArr = s.split('');

  function shiftRight(count) {
    for (let i = 0; i < count; i++) {
      const lastChar = sArr[sArr.length - 1];
      sArr.unshift(lastChar);
      sArr.pop();
    }
  }

  function shiftLeft(count) {
    for (let i = 0; i < count; i++) {
      const firstChar = sArr[0];
      sArr.push(firstChar);
      sArr.shift();
    }
  }

  let v = 0;
  for (const _s of shift) {
    const [direction, shiftValue] = _s;
    v += direction > 0 ? shiftValue : -shiftValue;
  }
  if (v > 0) {
    shiftRight(v);
  } else {
    shiftLeft(-v);
  }
  console.log(v);
  return sArr.join('');
};

// console.log(
//   stringShift('abc', [
//     [0, 1],
//     [1, 2],
//   ]),
// );

// console.log(
//   stringShift('abcdefg', [
//     [1, 1],
//     [1, 1],
//     [0, 2],
//     [1, 3],
//   ]),
// );

console.log(
  stringShift('wpdhhcj', [
    [0, 7],
    [1, 7],
    [1, 0],
    [1, 3],
    [0, 3],
    [0, 6],
    [1, 2],
  ]),
);
