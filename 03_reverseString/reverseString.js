/*
Get input
Turn input into array
Reverse array
Check and store array length newArray.length
Print array as string
*/


const reverseString = function(userString) {
    const newArray = userString.split("");
    const arrayLength = newArray.length;
    const reverseArray = [];
    let i = 0;

    while (i < arrayLength) {
        const originalIndex = arrayLength -1 -i;
        reverseArray.push(newArray[originalIndex]);
        i++;
    }

    return reverseArray.join('');
};

//Test
const myInput = "Apples.";
console.log(reverseString(myInput));


/*
const myString = "I like apples.";
const newArray = myString.split("");
const maxLength = newArray.length;
const decrementer = 0;

console.log(maxLength);
*/
//console.log(newArray[newArray.length-1]);

// Do not edit below this line
module.exports = reverseString
