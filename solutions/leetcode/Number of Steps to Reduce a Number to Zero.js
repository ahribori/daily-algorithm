/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
  let step = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    step++;
  }
  return step;
};

numberOfSteps(14);
numberOfSteps(8);
