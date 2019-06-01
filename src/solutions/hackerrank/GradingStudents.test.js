const gradingStudents = grades => {
  return grades.map(grade => {
    if (grade < 38) {
      return grade;
    }
    let nextEdge = grade;
    while (nextEdge % 5 > 0) {
      nextEdge++;
    }
    return nextEdge - grade < 3 ? nextEdge : grade;
  });
};

test('solution', () => {
  expect(gradingStudents([73, 67, 38, 33])).toStrictEqual([75, 67, 40, 33]);
});
