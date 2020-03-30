function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}


// 계단을 올라가는데 n 단계 걸린다.
// 매 단계마다 1 또는 2계단씩 오를수 있다. 꼭대기까지 오르는데 몇가지 방법이 있냐
// n은 양의 정수다

const climbStairs = (N) => {
  if (N === 1) {
    return 1;
  }

  let count = 0;
  for (let a = 0; a < N; a++) {
    const b = N - a * 2;
    if (b >= 0) {
      count += factorial(a + b) / (factorial(b) * factorial(a));
    }
  }

  return count;
};

// climbStairs(1);
// climbStairs(2);
// climbStairs(3);
// climbStairs(4);
// climbStairs(5);
// climbStairs(6);
