const staircase = n => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n; j++) {
      const _j = n - j - 1;
      if (i >= _j) {
        line += '#';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
};

test('solution', () => {
  staircase(3);
});
