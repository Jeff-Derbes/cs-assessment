const perf = require('execution-time')();


function doublerAppend(nums) {

    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums) {

    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


//Notes on funtion results
/*  Extra large array
        insert = 824 ms          append = 3.5 ms

    Large array
        insert = 6.806 ms        append = 677 μs

    Medium array
        insert = 163.4 μs        append = 171.7 μs

    Small array
        insert = 67.9 μs         append = 137.5 μs

    Tiny array
        insert = 55.615 μs       append = 130 μs

*/

//Paragraph explaining function

/*
    As we pass in larger and larger arrays, the insert function runs slower and slower because it has a linear time complexity of O(n) whereas the append function has a onstant time complexity of O(1).

    The reason for this is that the insert function uses the unshift method, and the append function uses the push method. The push method only grows with the size of the input, giving it the O(1) time complexity. This is because it is always going to take the number and add it onto the end of the array. The unshift method take the input, and puts the result at the beginning of the array. In order for it to do so, it has to go through each element in the array and perform an operation on it to move it the next index over. As the array grows, the function has to spend more time reassigning each item's index.
*/




