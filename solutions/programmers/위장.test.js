function solution(clothes) {
  let answer = 1;
  const closet = {};

  clothes.forEach(cloth => {
    const [name, type] = cloth;
    if (!closet[type]) {
      closet[type] = 1;
    } else {
      closet[type]++;
    }
  });

  for (const value of Object.values(closet)) {
    answer *= value + 1;
  }
  return answer - 1;
}

test('solution', () => {
  expect(
    solution([
      ['yellow_hat', 'headgear'],
      ['blue_sunglasses', 'eyewear'],
      ['green_turban', 'headgear'],
    ]),
  ).toBe(5);
  expect(
    solution([
      ['crow_mask', 'face'],
      ['blue_sunglasses', 'face'],
      ['smoky_makeup', 'face'],
    ]),
  ).toBe(3);
});
