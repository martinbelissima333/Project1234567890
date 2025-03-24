function multiply(x, y) {
  if (y === 0) return 0;
  let res = 0;

  while (y !== 0) {
    if ((y & 1) === 1) {
      res += x;
    }
    x <<= 1;
    y >>= 1;
  }

  return res;
}

console.log(multiply(2, 3)); // Output: 6
