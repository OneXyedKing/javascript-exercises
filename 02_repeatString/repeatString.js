const repeatString = function(word, times) {
    const output = []; // Create array INSIDE function
    let i = 0;
    
    while (i < times) {
        output.push(word); // Actually add the input word
        i++;
    }
    return output;
};

// Test case
const inputWord = prompt("Enter a Word");
const repetitions = parseInt(prompt("How many repitions?"));
const resultArray = repeatString(inputWord, repetitions);

console.log(resultArray); // ["apple", "apple", "apple", "apple", "apple"]
console.log(resultArray.join('')); // "appleappleappleappleapple"