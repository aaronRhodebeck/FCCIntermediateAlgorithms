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
function rot13(str) {
    var transformedCharCodes = [];

    for (let i = 0, len = str.length; i < len; i++) {
        // If character code is in the range of capital letters
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 91) {
            // Shift the character code, using % to wrap to beginning 
            // if out of range
            transformedCharCodes.push((shiftCapitalLetterBy13(str.charCodeAt(i))));
        } else {
            transformedCharCodes.push(str.charCodeAt(i));
        }
    }

    return String.fromCharCode(...transformedCharCodes);

    function shiftCapitalLetterBy13(charCode) {
        // Change the character codes to start from zero
        let newCharCode = charCode - 65;
        // Add the 13 for the shift, then subtract total letters in alphabet
        // if past Z to start at beginning
        newCharCode = (newCharCode + 13) % 26;
        // Return the shifted character code, and move it back to the proper spot in unicode
        return newCharCode + 65
    }
}

/*
Pig Latin
---------

 Translate the provided string to pig latin.

 Pig Latin takes the first consonant (or consonant cluster) of an English word,
 moves it to the end of the word and suffixes an "ay".

 If a word begins with a vowel you just add "way" to the end.

 Input strings are guaranteed to be English words in all lowercase.
 */
function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(str[0])) {
        return str + "way";
    } else if (wordIncludesVowel(str)) {
        let consonantCluster = findConsonantCluster(str);
        return removeFrom(str, consonantCluster) + consonantCluster + "ay";
    } else {
        return str + "ay";
    }

    return "Error in translator"

    function wordIncludesVowel(str) {
        for (let i = 0, len = str.length; i < len; i++) {
            if (vowels.includes(str[i])) {
                return true;
            }
        }
        return false;
    }

    function findConsonantCluster(str) {
        let consonantCluster = "";
        for (let i = 0, len = str.length; i < len; i++) {
            if (!vowels.includes(str[i])) {
                consonantCluster += str[i];
            } else {
                return consonantCluster;
            };
        }
    };

    function removeFrom(str, consonantCluster) {
        let regex = new RegExp(consonantCluster);
        return str.replace(regex, "");
    }
}

/*
Search and Replace
------------------

 Perform a search and replace on the sentence using the arguments provided and return
 the new sentence.

 First argument is the sentence to perform the search and replace on.

 Second argument is the word that you will be replacing (before).

 Third argument is what you will be replacing the second argument with (after).

 *Note*
  Preserve the case of the first character in the original word when you are replacing it.
  For example if you mean to replace the word "Book" with the word "dog", it should be 
  replaced as "Dog"
  */
function myReplace(str, before, after) {
    let regex = new RegExp(before, "ig");
    return str.replace(regex, matchCapitalization);

    function matchCapitalization(match) {
        if (isLowerCase(match[0])) {
            return after[0].toLowerCase() + after.slice(1);
        } else {
            return after[0].toUpperCase() + after.slice(1);
        }
    }

    function isLowerCase(letter) {
        return letter.toLowerCase() === letter;
    }
}

/*
DNA Pairing
-----------

 The DNA strand is missing the pairing element. Take each character, get its pair,
 and return the results as a 2d array.

 Base pairs are a pair of AT and CG. Match the missing element to the provided
 character.

 Return the provided character as the first element in each array.

 For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

 The character and its pair are paired up in an array, and all the arrays are grouped into
 one encapsulating array. */
function pairElement(str) {
    var elemsToPair = str.split("");
    var pairedElems = [];

    for (let i = 0, len = elemsToPair.length; i < len; i++) {
        pairedElems.push(pairElement(elemsToPair[i]));
    }

    return pairedElems;

    function pairElement(elem) {
        let elementPairs = {
            "A": "T",
            "T": "A",
            "C": "G",
            "G": "C",
        }

        return [elem, elementPairs[elem]];
    }
}