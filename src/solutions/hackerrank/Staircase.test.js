const staircase = n => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = n; j >= 0; j--) {
      if (i >= j) {
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
