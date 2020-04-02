function isHappy(n) {
  const hits = new Map();
  let numberArray = [];
  let result = n;

  while (true) {
    numberArray = result
      .toString()
      .split('');

    if (hits.has(result)) {
      return false;
    }

    hits.set(result, true);

    result = numberArray.reduce((prev, next) => {
      return prev + next ** 2;
    }, 0);

    if (result === 1) {
      return true;
    }
  }
}


const r = isHappy(78);
