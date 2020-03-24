const dailyTemperatures = function(T) {
  if (T.length === 0) {
    return 0;
  }

  const output = [];
  const length = T.length;
  for (let i = 0; i < length; i++) {
    const t = T[i];
    let futureExist = false;
    for (let k = i + 1; k < length; k++) {
      const t2 = T[k];
      console.log(t, t2);
      if (t < t2) {
        output.push(k - i);
        futureExist = true;
        break;
      }
    }
    if (!futureExist) {
      output.push(0);
    }
  }
  return output;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
