/*--- Sum square difference ---*/

// Prompt
/*---
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
---*/

// Imperative
const sumOfSquareOfFirstOneHundred = () => {
	let firstOneHundred = Array.from({ length: 100 }, (v, i) => i + 1);
	return firstOneHundred.reduce((acc, curr) => acc + curr * curr, 0);
};
console.log(sumOfSquareOfFirstOneHundred());

const squareOfSumOfFirstOneHundred = () => {
	let firstOneHundred = Array.from({ length: 100 }, (v, i) => i + 1);
	return Math.pow(firstOneHundred.reduce((acc, curr) => acc + curr), 2);
};
console.log(squareOfSumOfFirstOneHundred());

const sumDifferenceSquareOfFirstOneHundred = () => {
	return squareOfSumOfFirstOneHundred() - sumOfSquareOfFirstOneHundred();
};

// functional
const sumOfSquareOfFirstN = n => {
	let firstN = Array.from({ length: n }, (v, i) => i + 1);
	return firstN.reduce((acc, curr) => acc + curr * curr, 0);
};
console.log(sumOfSquareOfFirstN(100));

const squareOfSumOfFirstN = n => {
	let firstN = Array.from({ length: n }, (v, i) => i + 1);
	return Math.pow(firstN.reduce((acc, curr) => acc + curr), 2);
};
console.log(squareOfSumOfFirstN(100));

const sumDifferenceSquareOfFirstN = n => {
	return squareOfSumOfFirstN(n) - sumOfSquareOfFirstN(n);
};
