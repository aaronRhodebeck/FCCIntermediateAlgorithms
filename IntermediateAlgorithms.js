/*****************************************************************
 All of the algorithms for freeCodeCamp's intermediate algorithms
 testable using jasmine.
******************************************************************/

/*
Sum of Numbers in Range
-----------------------

 We'll pass you an array of two numbers return the sum of those two numbers plus
 the sum of all the numbers between them. The lowest number will not always come first.
 */

function sumAll(arr) {
    var lowerNumber = (arr[0] < arr[1]) ? arr[0] : arr[1];
    var higherNumber = (arr[0] > arr[1]) ? arr[0] : arr[1];
    var sum = 0;

    for (let i = lowerNumber; i <= higherNumber; i++) {
        sum += i;
    }

    return sum;
}

/*
Diff Two Arrays
---------------

 Compare two arrays and return a new array with any items only found in one of the two
 given arrays but not both. In other words, return the symmetric difference of the two 
 arrays.
 */

function diffArray(arr1, arr2) {
    var diffElem = [];

    diffElem = diffElem.concat(compareArray(arr1, arr2));
    diffElem = diffElem.concat(compareArray(arr2, arr1));
    return diffElem;

    function compareArray(array1, array2) {
        var differentElements = []
        for (let i = 0, len = array1.length; i < len; i++) {
            if (!array2.includes(array1[i])) {
                differentElements.push(array1[i]);
            }
        }
        return differentElements;
    }
}

/*
Check For Palindromes
---------------------

 Return true if the given string is a palindrome. Otherwise, return false.
 *Note*
 You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
 and turn everything into the same case (lower or upper case) in order to check for palindromes.
 */

function palindrome(str) {
    var letterArray = str.toLowerCase().replace(/[^a-z0-9]/g, "").split("");
    return letterArray.join("") == letterArray.reverse().join("");
}

/*
Seek and Destroy
----------------

 You will be provided with an initial array (the first argument in the destroyer function), 
 followed by one or more arguments. Remove all elements from the initial array that are of 
 the same value as these arguments.

 *Note*
 You have to use the arguments object.
 */

function destroyer(arr) {
    var args = [...arguments];
    var array = args.shift();

    // Must reverse loop, otherwise the index changes
    // when the array is modified
    for (let i = array.length - 1; i > -1; i--) {
        if (args.includes(array[i])) {
            array.splice(i, 1);
        }
    }

    return array;
}

/*
Wherefore art thou
------------------

 Make a function that looks through an array of objects (first argument) and returns an array
 of all objects that have matching name and value pairs (second argument). Each name and value
 pair of the source object has to be present in the object from the collection if it is to be
 included in the returned array.

 For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio",
 last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" },
 then you must return the third object from the array (the first argument), because it contains 
 the name and its value, that was passed on as the second argument.
 */

function whatIsInAName(collection, source) {
    var matchingObjects = [];

    for (let i = 0, len = collection.length; i < len; i++) {
        if (objectsHaveMatchingKeys(collection[i], source)) {
            matchingObjects.push(collection[i]);
        }
    }

    return matchingObjects;

    function objectsHaveMatchingKeys(obj1, obj2) {
        for (let key in obj2) {
            if (obj2[key] !== obj1[key]) {
                return false;
            }
        }
        return true;
    }
}

/*
Spinal Tap Case
---------------

 Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */
function spinalCase(str) {
    var capitalsRemoved = str.replace(/([A-Z])/g, addSpaceBeforeMatch);
    return capitalsRemoved
        .trim()
        .split(/[^a-z0-9]*[^a-z0-9]/g)
        .join('-');

    function addSpaceBeforeMatch(match) {
        return " " + match.toLowerCase();
    }
}

/*
Roman Numeral Converter
-----------------------

 Convert the given number into a roman numeral.

 All roman numerals answers should be provided in upper-case.
 */

function convertToRoman(num) {
    var romanNumeralChart = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
        4: "IV",
        9: "IX",
        40: "XL",
        90: "XC",
        400: "CD",
        900: "CM"
    };

    var romanNumeralEquivalent = buildNumberArray(romanNumeralChart);
    var romanNumeral = "";

    while (num > 0) {
        for (let i = 0, len = romanNumeralEquivalent.length; i < len; i++) {
            if (num - romanNumeralEquivalent[i] >= 0) {
                console.log(num, romanNumeralEquivalent[i]);
                romanNumeral += romanNumeralChart[romanNumeralEquivalent[i]];
                num -= romanNumeralEquivalent[i];
                i--; // Check if the same number can be used again
            }
        }
    }

    return romanNumeral;

    function buildNumberArray(romanNumeralChart) {
        let numberArray = [];
        for (let number in romanNumeralChart) {
            numberArray.push(parseInt(number));
        }
        return numberArray.sort((a, b) => b - a);
    }
}

/*
Caeser's Cipher
---------------
 One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift 
 cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

 A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 
 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

 Write a function which takes a ROT13 encoded string as input and returns a decoded string.

 All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces,
 punctuation), but do pass them on. */
function rot13() {

}