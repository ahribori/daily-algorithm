const solution = (S, P, Q) => {
  const getImpactFactor = code => {
    switch (code) {
      case 'A':
        return 1;
      case 'C':
        return 2;
      case 'G':
        return 3;
      case 'T':
        return 4;
    }
  };

  const impactFactorDiffArrays = [
    [0], // A
    [0], // C
    [0], // G
    [0], // T
  ];

  for (let i = 0, length = S.length; i < length; i++) {
    const code = S[i];
    const impactFactor = getImpactFactor(code);
    impactFactorDiffArrays.forEach((arr, index) => {
      const prevIndex = arr.length - 1;
      if (index === impactFactor - 1) {
        arr.push(arr[prevIndex] + 1);
      } else {
        arr.push(arr[prevIndex]);
      }
    });
  }

  const results = [];
  const length = P.length;

  for (let i = 0; i < length; i++) {
    const from = P[i];
    const to = Q[i] + 1;

    for (let k = 0; k < 4; k++) {
      const arr = impactFactorDiffArrays[k];
      if (arr[to] - arr[from] > 0) {
        results.push(k + 1);
        break;
      }
      if (from === to && arr[to] - arr[to - 1] > 0) {
        results.push(k + 1);
        break;
      }
    }
  }
  return results;
};

test('solution', () => {
  expect(solution('GAGCCTA', [2, 5, 0], [4, 5, 6])).toEqual([2, 4, 1]);
  expect(solution('A', [0], [0])).toEqual([1]);
  expect(solution('AC', [0, 0, 1], [0, 1, 1])).toEqual([1, 1, 2]);
});
