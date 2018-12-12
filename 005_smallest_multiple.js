/*--- Smallest multiple ---*/

// Prompt
/*---
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
---*/

// Imperative
const findSmallestMultipleOf1To20 = () => {
	let factors = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20
	];
	let smallest = 20;
	while (!checkAllFactors(factors, smallest)) {
		smallest++;
	}
	return smallest;
};

// functional
const findSmallestDivisibleBy = end => {
	let factors = Array.from({ length: end }, (v, i) => i + 1);
	let smallest = end;
	while (!checkAllFactors(factors, smallest)) {
		smallest++;
	}
	return smallest;
};

//helper functions
const checkAllFactors = (factors, num) => {
	return factors.reduce((allDivisible, factor) => {
		if (!divisibleBy(num, factor)) {
			allDivisible = false;
		}
		return allDivisible;
	}, true);
};

const divisibleBy = (num, divisor) => {
	return num % divisor === 0;
};
