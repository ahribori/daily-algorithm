/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function(people) {
  const result = [];
  const sortedPeople = people.sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : b[0] - a[0],
  );

  for (let i = 0; i < sortedPeople.length; i++) {
    const p = sortedPeople[i];
    result.splice(p[1], 0, p);
  }

  console.log(sortedPeople);
  console.log(result);

  return result;
};


reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]);

