//01. Sum First and Last Array Elements

function sumFirstLastArrElement(arr) {
    const [first, ...rest] = arr;
    const last = arr[arr.length - 1];
    return first + last;
}

console.log(sumFirstLastArrElement([10, 17, 22, 33]));

//02. Reverse an Array of Numbers

function cutAndReverse(num, arr) {
    return arr.slice(0, num).reverse().join(" ");
}

console.log(cutAndReverse(4, [-1, 20, 99, 5]));

//03. Even and Odd Subtraction

function evenOddSum(arr) {
    const evenNumsArr = arr.filter(el => el % 2 === 0);
    let evenSum = 0;
    evenNumsArr.forEach(element => {
        evenSum += element
    });

    const oddNumsArr = arr.filter(el => el % 2 !== 0);
    let oddSum = 0;
    oddNumsArr.forEach(element => {
        oddSum += element
    });

    return evenSum - oddSum;
}

console.log(evenOddSum([3, 5, 7, 9]));

//04. Substring

function printSubstring(string, start, substringCount) {
    let substring = string.substring(start, start + substringCount);
    return substring;
}

console.log(printSubstring('ASentence', 1, 8));

//05. Censored Words

function censorString(string, word) {
    while (string.includes(word)) {
        string = string.replace(word, '*'.repeat(word.length));
    }

    return string;
}

console.log(censorString('A small sentence with some small words', 'small'))

//06. Count String Occurrences

function countStringOccurrences(text, word){
    const arrText = text.split(" ");
    let wordCount = 0

    arrText.forEach(element =>{
        if (element === word) {
            wordCount++;
        }
    });

    return wordCount;
}

console.log(countStringOccurrences('This is a word and it also is a sentence',
'is'))