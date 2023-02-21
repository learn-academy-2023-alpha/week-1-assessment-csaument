// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: Create a function isBoiling that compares an input parameter temperature to 212 degrees fahrenheit and returns a string that specifies whether the input is below, at, or above the boiling point of water at sea level.

const isBoiling = (temperature) => {
    // Create a constant to define the boiling temperature
    const tempBoiling = 212 

    // Loop through various cases
    if(isNaN(temperature)){ // Edge case: tests to confirm that the input is actually a number
        return "Please input a number"
    } else if (temperature < tempBoiling) { // Case: temperature is below the boiling point
        return `${temperature} is below boiling point`
    } else if (temperature === tempBoiling) { // Case: temperature is at boiling point
        return `${temperature} is at boiling point`
    } else if (temperature > tempBoiling) { // Case: temperature is above boiling point
        return `${temperature} is above boiling point`
    } else {
        return "Something went wrong" // Edge case: strange issue occured in the code
    }
}

const temp1 = 42
// Expected output: "42 is below boiling point"
console.log(isBoiling(temp1))

const temp2 = 350
// Expected output: "350 is above boiling point"
console.log(isBoiling(temp2))

const temp3 = 212
// Expected output: "212 is at boiling point"
console.log(isBoiling(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: Create a function combineArrays that takes two input array parameters and returns an integer/number that counts the total number of items in both arrays.

const combineArrays = (array1, array2) => {
    if (array1 instanceof Array && array2 instanceof Array){ // Checks to confirm that both inputs are Arrays
        return array1.length+array2.length // Returns a sum of the lengths of both inputs if they are Arrays
    } else {
        return "Please provide two arrays" // Returns an error statement if either input is not an Array
    }
}

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
console.log(combineArrays(padres1984WorldSeriesRuns,padres1998WorldSeriesRuns))

// Edge-case testing for unexpected datatypes
console.log(combineArrays(null,[0,1])) // Null; code failed to run due to TypeError.
console.log(combineArrays(undefined,[0,1])) // Undefined; code failed to run due to TypeError.
console.log(combineArrays("test",[0,1])) // String; code returned length of string plus number of items in array. Valid response; alternative would count a string as a single item.
console.log(combineArrays(1,[0,1])) // Number; code returned NaN.

// Adjusted code to create an error message if either input is not an array.


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: Create a function reverseString that takes as input a string parameter and returns a string with the characters reversed.

const reverseString = (inputString) => {
    if(inputString.constructor == String){ // Checks to confirm that the input is a String; instanceof did not work correctly due to the object wrapper
        return inputString.split("").reverse().join("") // Single line to transform the String into an Array of characters, reverse the order, then rejoin them into a new string as the output
    } else {
        return "Please input a string" // Returns an error statement if the input is not a String
    }
}

const currentCohort = "Alpha 2023"
// Expected output: "3202 ahplA"
console.log(reverseString(currentCohort))

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: Create a function findLast that takes as input two parameters. The first input is a number and the second input is an array. The function returns the index of the last instance of the first parameter in the second parameter. Note: this implementation does not accept characters and strings as inputs.

const findLast = (myValue, myArray) => {
    if (!(myValue.constructor == Number) || !(myArray instanceof Array)){ // Checks to confirm that the appropriate datatypes were provided; instanceof did not work correctly for numbers due to the object wrapper
        return "Please input a value and an array"
    } else {
        let i = myArray.lastIndexOf(myValue) // Conducts single search through myArray, looking for myValue using built-in method for class Array
        if (i === -1){ // .lastIndexOf() returns -1 when the value is not found in the array
            return `${myValue} is not found in this array`
        } else {
            return i
        }
    }
}

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7
console.log(findLast(givenValue1, myNumbers))

const givenValue2 = 10
// Expected output: 8
console.log(findLast(givenValue2, myNumbers))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: Create a function easySort that takes as input an array of numbers and returns as output the same numbers listed in descending order.

const easySort = (myArray) => {
    return myArray.sort(function(a,b){return b-a})
}

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
console.log(easySort(sanDiegoSummerTemperatures))

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
console.log(easySort(sanDiegoWinterTemperatures))