const pageCount = (n, p) => {
  const isLastPageLeft = n % 2 === 0;
  const totalFlipCount = Math.ceil(n / 2);

  const forwardViewPage = [null, 1];
  const reverseViewPage = isLastPageLeft ? [n, null] : [n - 1, n];

  for (let i = 0; i <= totalFlipCount ; i++) {
    if (
      forwardViewPage[0] === p ||
      forwardViewPage[1] === p ||
      reverseViewPage[0] === p ||
      reverseViewPage[1] === p
    ) {
      return i;
    }
    forwardViewPage[0] = forwardViewPage[1] + 1;
    forwardViewPage[1] = forwardViewPage[0] + 1;
    reverseViewPage[1] = reverseViewPage[0] - 1;
    reverseViewPage[0] = reverseViewPage[1] - 1;
  }
};

test('solution', () => {
  expect(pageCount(6, 2)).toBe(1);
  expect(pageCount(5, 4)).toBe(0);
});
