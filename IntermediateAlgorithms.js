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

function diffArray([arr1, arr2]) {
    var newArr = [];
    return newArr;
})