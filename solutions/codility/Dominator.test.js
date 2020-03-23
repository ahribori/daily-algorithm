const solution = A => {
  const length = A.length;
  const map = new Map();
  for (let i = 0; i < length; i++) {
    const num = A[i];
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }
  let dominator = -1;
  let occured = -1;
  for (const [key, value] of map.entries()) {
    if (value > occured) {
      dominator = key;
      occured = value;
    }
  }
  if (occured <= length / 2) {
    return -1;
  }
  for (let x = 0; x < length; x++) {
    if (A[x] === dominator) {
      return x;
    }
  }
};

test('solution', () => {
  expect(solution([3, 4, 3, 2, 3, -1, 3, 3])).toBe(0);
});
