const sockMerchant = (n, ar) => {
  const set = new Set();
  let count = 0;

  ar.forEach(item => {
    if (!set.has(item)) {
      set.add(item);
    } else {
      count++;
      set.delete(item);
    }
  });

  return count;
};

test('solution', () => {
  expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
});
