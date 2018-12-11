/*--- Multiples of 3 and 5 ---*/

// Prompt
/*---
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
---*/

// Imperative
const sumOfMultiplesOf3and5Below1000 = () => {
	let sum = 0;
	let curr = 1;
	while (curr < 1000) {
		if (curr % 5 === 0 || curr % 3 === 0) {
			sum += curr;
		}
		curr++;
	}
	return sum;
};

// functional
// input: starting value
const sumOfMultiplesOf3and5 = (start, end) => {
	if (start < 0) {
		return "Must start at a natural number.";
	}

	if (start > end) {
		return "Ending value has to be greater than or equal to starting value";
	}

	let sum = 0;
	let curr = start;
	while (curr <= end) {
		if (curr % 5 === 0 || curr % 3 === 0) {
			sum += curr;
		}
		curr++;
	}
	return sum;
};
