function findSum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(findSum([1, 2, 3]));
