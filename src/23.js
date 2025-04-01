function calculateSum(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}

console.log(calculateSum([1, 2, 3, 4])); // Output: 10
