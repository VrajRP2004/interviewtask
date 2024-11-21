function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// Example usage
console.log(isEvenOrOdd(3)); // "Odd"
console.log(isEvenOrOdd(8)); // "Even"

// Explanation
// num % 2 === 0: Checks if the remainder when num is divided by 2 is zero. If true, the number is even.
// Ternary operator: Returns "Even" if the condition is true, otherwise "Odd".