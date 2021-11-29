// 1. Sum zero


const sumToZero = (arr) => {
    let sum = false

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] + arr[j] === 0) {
                    sum = true;
                };
            };
        };
    };

    return sum
}

console.log(sumToZero([1, 2, 3, -2]))


//The time complexity of this function is going to be quadratic, O(n^2) because it is a nested for loop. 


//Unique Characters

const hasUniqueCharacters = (word) => {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

console.log(hasUniqueCharacters('Moonday'))

// The time complexity is O(n) because it will increase linearly with the size of the paramter passed through


//Pangram sentence

const isPangram = (string) => {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

// The time complexity of this function is O(n)


//Longest word

function findLongestWord(arr) {
    let len = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > len) {
            len = arr[i].length
        }
    }
    return len
}

// The time complexity of the function is O(n)