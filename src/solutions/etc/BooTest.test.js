const solution = n => {
  if (n <= 0) {
    return null;
  }

  const getCodeByNumber = number => ['O', 'T', 'H', 'F'][number - 1];

  function decode(number) {
    if (number === 0) {
      return '';
    }

    const quotient = Math.floor(number / 4); // 몫
    const remainder = number % 4; // 나머지

    if (remainder === 0) {
      return decode(quotient - 1) + getCodeByNumber(4);
    } else {
      return decode(quotient) + getCodeByNumber(remainder);
    }
  }

  return decode(n);
};

test('solution', () => {
  expect(solution(1)).toBe('O');
  expect(solution(2)).toBe('T');
  expect(solution(3)).toBe('H');
  expect(solution(4)).toBe('F');
  expect(solution(5)).toBe('OO');
  expect(solution(6)).toBe('OT');
  expect(solution(7)).toBe('OH');
  expect(solution(8)).toBe('OF');
  expect(solution(9)).toBe('TO');
  expect(solution(10)).toBe('TT');
  expect(solution(11)).toBe('TH');
  expect(solution(12)).toBe('TF');
  expect(solution(13)).toBe('HO');
  expect(solution(14)).toBe('HT');
  expect(solution(15)).toBe('HH');
  expect(solution(16)).toBe('HF');
  expect(solution(17)).toBe('FO');
  expect(solution(18)).toBe('FT');
  expect(solution(19)).toBe('FH');
  expect(solution(20)).toBe('FF');
  expect(solution(21)).toBe('OOO');
  expect(solution(22)).toBe('OOT');
  expect(solution(23)).toBe('OOH');
  expect(solution(24)).toBe('OOF');
  expect(solution(25)).toBe('OTO');
  expect(solution(26)).toBe('OTT');
  expect(solution(27)).toBe('OTH');
  expect(solution(28)).toBe('OTF');
  expect(solution(1313)).toBe('FFOFO');
  expect(solution(13141513)).toBe('TFOFOFOOHFTO');
});

/*
1 -> O -> 1 1
2 -> T -> 2 2
3 -> H -> 3 3
4 -> F -> 4 10
5 -> OO -> 11 11
6 -> OT -> 12 12
7 -> OH -> 13 13
8 -> OF -> 14 20
9 -> TO -> 21 21
10 -> TT -> 22
11 -> TH -> 23
12 -> TF -> 24
13 -> HO -> 31
14 -> HT -> 32
15 -> HH -> 33
16 -> HF -> 34
17 -> FO -> 41
18 -> FT -> 42
19 -> FH -> 43
20 -> FF -> 44
21 -> OOO -> 111
22 -> OOT -> 112
23 -> OOH -> 113
24 -> OOF -> 114
25 -> OTO -> 121
26 -> OTT -> 122
27 -> OTH -> 123
28 -> OTF -> 124
 */
