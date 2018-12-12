/*--- Largest palindrome product ---*/

// Prompt
/*---
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
---*/

// Imperative
const findLargestPalindromeFromProductOfTwo3DigitNums = () => {
	let palindrome = 0;
	for (let num1 = 999; num1 > 99; num1--) {
		for (let num2 = 999; num2 > 99; num2--) {
			let product = num1 * num2;
			if (product > palindrome && checkPalindrome(product)) {
				palindrome = product;
			}
		}
	}
	return palindrome;
};

const checkPalindrome = num => {
	num = num + "";
	let front = 0;
	let back = num.length - 1;
	while (front <= back) {
		if (num[front] !== num[back]) {
			return false;
		}
	}
	return true;
};

// functional
// takes in integer values only
const findLargestPalindromeFromProductOfTwo = (num1, num2) => {
	if (num1 * num2 < 0)
		return "No palindrome found.(The product has to be positive)";
	if (num1 < 0) {
		num1 = Math.abs(num1);
		num2 = Math.abs(num2);
	}
	let palindrome = 0;
	for (let numOne = num1; numOne > Math.floor(num1 / 10); num1--) {
		for (let numTwo = num2; numTwo > Math.floor(num2 / 10); num2--) {
			let product = numOne * numTwo;
			if (product > palindrome && checkPalindrome(product)) {
				palindrome = product;
			}
		}
	}
	return palindrome;
};
