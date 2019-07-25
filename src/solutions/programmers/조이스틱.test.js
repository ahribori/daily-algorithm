function solution(name) {
  const menu = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  let forwardMoveCount = 0;
  let reverseMoveCount = 0;

  // forward
  for (const [index, char] of Array.from(name).entries()) {

    const idx = menu.indexOf(char);
    const rightPrice = idx;
    const leftPrice = 26 - idx;
    if (rightPrice <= leftPrice) {
      forwardMoveCount += rightPrice;
    } else {
      forwardMoveCount += leftPrice;
    }
    if (index === name.length - 2 && name[name.length - 1] === 'A') {
      break;
    }
    if (index < name.length - 1) {
      forwardMoveCount++;
    }
  }

  // reverse
  const idx = menu.indexOf(name[0]);
  reverseMoveCount += idx <= 26 - idx ? idx : 26 - idx;
  for (let i = name.length - 1; i > 0; i--) {
    reverseMoveCount++;
    const idx = menu.indexOf(name[i]);
    const rightPrice = idx;
    const leftPrice = 26 - idx;
    if (rightPrice <= leftPrice) {
      reverseMoveCount += rightPrice;
    } else {
      reverseMoveCount += leftPrice;
    }
    if (i === 2 && name[1] === 'A') {
      break;
    }
  }

  console.log(forwardMoveCount, reverseMoveCount)

  return forwardMoveCount >= reverseMoveCount
    ? reverseMoveCount
    : forwardMoveCount;
}

test('solution', () => {
  expect(solution('A')).toBe(0);
  expect(solution('AA')).toBe(0);
  expect(solution('AAAAA')).toBe(0);
  expect(solution('JEROEN')).toBe(56);
  expect(solution('JAN')).toBe(23);
  expect(solution('JNA')).toBe(23);
});
