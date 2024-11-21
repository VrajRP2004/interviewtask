function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();
// Explanation

// Loop: Iterate through numbers from 1 to 100.
// Condition for "FizzBuzz": Check if the number is divisible by both 3 and 5 using i % 3 === 0 && i % 5 === 0.
// Condition for "Fizz": Check if the number is divisible by 3.
// Condition for "Buzz": Check if the number is divisible by 5.
// Default case: Print the number if none of the above conditions apply.
