function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, c;
  while (c = a + b) {
    a = b;
    b = c;
  }
  return b;
}
