/*
	Challenge 4: Calculate the sum of numbers within an array

		You can create your own array of numbers but consider trying this problem
		with a few different sets to verify your solution. Have one array with
		negative and positive numbers and another with integers and decimals.

		You could also try using arrays of different lengths. If you're feeling
		comfortable with this, try the slightly more challenging bonus challenge
		below.

		Bonus intermediate challenge: Create a function that can return the sum of
		a particular column or row number in a table.
 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
if (!output) throw "Output container not found.";

//@ts-check
// your code starts after this line

let negAndPos = [
	-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

let intAndDec = [
	-10.9,
	-10.8,
	-10.7,
	-10.6,
	-10.5,
	-10.4,
	-10.3,
	-10.2,
	-10.1,
	-10,
	
];
