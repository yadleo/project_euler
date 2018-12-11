/*--- Largest prime factor ---*/

// Prompt
/*---
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
---*/

// Imperative
const findLargestPrimeFactorOf60085147513 = () => {
	return findFactors(60085147513).pop();
};

const findFactors = num => {
	if (num === 0) return [0];
	let factors = [1];
	let divisor = 2;
	while (num !== 1) {
		if (isDivisibleBy(num, divisor)) {
			factors.push(divisor);
			num = num / divisor;
		} else {
			divisor++;
		}
	}
	return factors;
};

const isDivisibleBy = (num, divisor) => {
	return num % divisor === 0;
};

const isPrime = num => {
	return findFactors(num).length === 1;
};

// functional
const findLargestPrimeFactor = num => {
	if (num < 0) {
		num = Math.abs(num);
	}
	return findFactors(num).pop();
};
