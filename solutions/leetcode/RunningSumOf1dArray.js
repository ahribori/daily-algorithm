const runningSum = function(nums) {
  let sum = 0;
  return nums.map(num => {
    const temp = num + sum;
    sum = temp;
    return temp;
  });
};

const r1 = runningSum([1, 2, 3, 4]); // 1,3,6,10
const r2 = runningSum([1, 1, 1, 1, 1]); // 1,2,3,4,5
const r3 = runningSum([3, 1, 2, 10, 1]);
const edge1 = runningSum([]);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(edge1);
