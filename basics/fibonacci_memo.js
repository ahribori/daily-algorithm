const memo = new Map();

function fibo(n) {
  if (n < 3) return n;
  const a = memo.get(n - 2) || fibo(n - 2);
  const b = memo.get(n - 1) || fibo(n - 1);
  const r = a + b;
  if (!memo.has(n)) memo.set(n, r);
  return r;
}

const a = fibo(30);
console.log(a);
// 1, 2, 3, 5, 8, 13
