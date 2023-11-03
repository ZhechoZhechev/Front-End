//01. Smallest of Three Numbers

function findSmallestOfThreeNumbers(num1, num2, num3){
    let array = [num1, num2, num3];
    array = array.sort((a, b)=> a - b);
    return smallestNumber = array[0];
}

console.log(findSmallestOfThreeNumbers(2, 2, 2));

//02. Add and Subtract

function addAndSubstract(num1, num2, num3){
    let sum = (a, b) => a + b;
    return sum(num1, num2) - num3;
}

console.log(addAndSubstract(1, 17, 30))

//03 Characters in Range

function charsToAsciiCodes(char1, char2){
    let asciiChar1 = char1.charCodeAt();
    let asciiChar2 = char2.charCodeAt();

    let start = Math.min(asciiChar1, asciiChar2);
    let end = Math.max(asciiChar1, asciiChar2);
    let charArray = new Array();

    for (let code = start + 1; code < end; code++) {
        charArray.push(String.fromCharCode(code));
    }

    return charArray.join(" ");
}

console.log(charsToAsciiCodes("C", "#"));


//04. Odd and Even Sum

function sumOfOddAndEvenNumbers(number){
    let numAsString = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let index = 0; index < numAsString.length; index++) {
        let currDigit = Number(numAsString[index])

        if(currDigit % 2 === 0) evenSum += currDigit;
        else oddSum += currDigit;
    }

    return ` Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(sumOfOddAndEvenNumbers(1000435));