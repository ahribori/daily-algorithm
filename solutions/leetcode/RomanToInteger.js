const solution = s => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const val = map[s[i]];
    sum += i < s.length - 1 && val < map[s[i + 1]] ? -val : val;
  }
  console.log(sum);
  return sum;
};

solution('MCMXCIV');
solution('III');
solution('IV');
solution('IX');
solution('LVIII');
