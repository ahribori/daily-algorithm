const solution = A => {
  const length = A.length;
  const map = new Map();
  for (let i = 0; i < length; i++) {
    const num = A[i];
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }

  let dominator;
  map.forEach(key => {
    const value = map.get(key);
    if (!dominator || value > dominator) {
      dominator = value;
    }
  });

  console.log(`dominator: ${dominator}`);

};

test('solution', () => {
  expect(solution([4, 3, 4, 4, 4, 2])).toBe(2);
});
