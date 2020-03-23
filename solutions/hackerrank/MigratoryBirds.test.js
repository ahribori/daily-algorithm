const migratoryBirds = arr => {
  const map = new Map();
  arr.forEach(type => {
    if (!map.has(type)) {
      map.set(type, 1);
    } else {
      map.set(type, map.get(type) + 1);
    }
  });

  const maxEntry = { key: 6, value: 0 };

  for (const [key, value] of map.entries()) {
    if (value > maxEntry.value) {
      maxEntry.key = key;
      maxEntry.value = value;
    }
    if (value === maxEntry.value && key < maxEntry.key) {
      maxEntry.key = key;
      maxEntry.value = value;
    }
  }

  return maxEntry.key;
};

test('solution', () => {
  expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
  expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3);
});
