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

    for (let i = 0, len = arr1.length; i < len; i++) {
        if (!arr2.includes(arr1[i])) {
            diffElem.push(arr1[i]);
        }
    }

    for (let i = 0, len = arr2.length; i < len; i++) {
        if (!arr1.includes(arr2[i])) {
            diffElem.push(arr2[i]);
        }
    }
    return diffElem;
}