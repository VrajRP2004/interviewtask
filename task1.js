function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
const input = "hello";
const output = reverseString(input);
console.log(output); // "olleh"


// Explanation
// split(''): Converts the string into an array of individual characters.
// reverse(): Reverses the order of elements in the array.
// join(''): Joins the elements of the array back into a single string.