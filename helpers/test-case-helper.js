const createRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const createArrayOfRandomNumbers = (length, min, max) => {
  return Array.from(Array(length)).map(() => createRandomNumber(min, max));
};

module.exports = {
  createRandomNumber,
  createArrayOfRandomNumbers,
};
