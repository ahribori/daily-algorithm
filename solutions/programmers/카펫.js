function solution(brown, yellow) {
  var answer = [];
  const total = brown + yellow;
  for (let yWidth = 1; yWidth <= yellow; yWidth++) {
    const yHeight = yellow / yWidth;
    if (yHeight % 1 > 0) continue;
    const bWidth = yWidth + 2;
    const bHeight = yHeight + 2;
    console.log(
      `yellow: ${yWidth} x ${yHeight}, brown: ${bWidth} x ${bHeight}`,
    );
    if (bWidth * bHeight === total) {
      return [bHeight, bWidth];
    }
  }
  return answer;
}

solution(8, 2);
