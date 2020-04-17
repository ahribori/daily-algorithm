const findUnsortedSubarray = function (nums) {
  const clone = nums.map((item) => item).sort((a, b) => a - b);
  console.log(nums);
  console.log(clone);
  let start = Number.MAX_VALUE,
    end = Number.MIN_VALUE,
    length = nums.length;
  for (let i = 0; i < length; i++) {
    const n = nums[i];
    const c = clone[i];
    if (n !== c) {
      start = Math.min(start, i);
      end = Math.max(end, i);
    }
  }
  const subArrayLength = end - start + 1;
  return subArrayLength > 0 ? subArrayLength : 0;
};

test('solution', () => {
  expect(
    findUnsortedSubarray([9, 2, 3, 4, 1, 2, 3, 1, 100, 101, 102, 103]),
  ).toBe(8);
  expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5);
  expect(findUnsortedSubarray([1, 2, 3, 4])).toBe(0);
  expect(findUnsortedSubarray([1])).toBe(0);
  expect(findUnsortedSubarray([1, 3, 2, 2, 2])).toBe(4);
  expect(findUnsortedSubarray([1, 2, 3, 3, 3])).toBe(0);
  expect(findUnsortedSubarray([1, 3, 2, 3, 3])).toBe(2);
});
