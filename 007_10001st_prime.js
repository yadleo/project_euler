/*--- 10001st prime ---*/

// Prompt
/*---
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
---*/

// Imperative
const tenThousandAndOnePrimer = () => {
	let counter = 1;
	let curr = 2;
	while (counter !== 10001) {
		curr++;
		if (isPrime(curr)) {
			counter++;
		}
	}
	return curr;
};

// functional
const findNthPrime = n => {
	let counter = 1;
	let curr = 2;
	while (counter !== n) {
		curr++;
		if (isPrime(curr)) {
			counter++;
		}
	}
	return curr;
};

// helper
const isPrime = num => {
	let factor = 2;
	while (Math.ceil(num / 2) >= factor) {
		if (num % factor === 0) {
			return false;
		}
		factor++;
	}
	return true;
};
