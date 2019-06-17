const bonAppetit = (bill, k, b) => {
  const totalPrice = bill.reduce((prev, next) => prev + next);
  const annaPrice = (totalPrice - bill[k]) / 2;
  const refund = b - annaPrice;
  return refund > 0 ? refund : 'Bon Appetit';
};

test('bonAppetit', () => {
  expect(bonAppetit([3, 10, 2, 9], 1, 12)).toBe(5);
  expect(bonAppetit([3, 10, 2, 9], 1, 7)).toBe('Bon Appetit');
});
