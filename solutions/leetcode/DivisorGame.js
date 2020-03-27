const divisorGame = function(N) {
  let output = false;

  while (true) {
    let x = null;

    for (let i = 1; i < N; i++) {
      if (N % i === 0) {
        x = i;
        break;
      }
    }
    if (!x) {
      break;
    }
    output = !output;
    N = N - x;
  }
  return output;
};

divisorGame(2);
divisorGame(3);
