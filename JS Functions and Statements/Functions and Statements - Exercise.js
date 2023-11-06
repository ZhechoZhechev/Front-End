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

//05. Palindrome Integers

function ifIsAPalindrome(arr){

    arr.forEach(element => {
        let reversedElement = parseInt(element.toString().split("").reverse().join(""));
        element === reversedElement ? console.log("true") : console.log("false");
    });
}

ifIsAPalindrome([32,2,232,1010]);

//06. Password Validator

function validatePassword(pass){
    let valid = true;

    if (pass.length < 6 || pass.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        valid = false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(pass)) {
        console.log("Password must consist only of letters and digits");
        valid = false;
    }

    let counter = 0;
    charArray = pass.split("");
    charArray.forEach(char =>{
    let outcome = /^\d$/.test(char)
    if (outcome === true) counter++;
    });

    if (counter < 2) {
        console.log("Password must have at least 2 digits");
        valid = false;
    }

    if (valid === true){
        console.log("Password is valid");
    }
}

validatePassword("logIn");

//07. NxN Matrix

function printMatrix(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            row += n + ' ';
        }
        console.log(row);
    }
}

printMatrix(3);

//08. Perfect Number 

function isItPerfect(num){
    sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

isItPerfect(1236498);

//09. Loading Bar

function createLoadingBar(num){
    let firstCharRepeats = num /10;
    let secondCharRepeats = 10 - firstCharRepeats;
    if (num !== 100) {
        console.log(`${num}% [${'%'.repeat(firstCharRepeats)}${'.'.repeat(secondCharRepeats)}]`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!")
        console.log(`${num.repeat(firstCharRepeats)}`);
    }
}

createLoadingBar(50);

//10. Factorial Division

function factorialDevision(num1, num2){
    let num1Sum = 1;
    for (let i = 1; i <= num1; i++) {
        num1Sum *= i;
    }
    let num2Sum = 1;
    for (let i = 1; i <= num2; i++) {
        num2Sum *= i;
    }
    return (num1Sum / num2Sum).toFixed(2);
}

console.log(factorialDevision(6, 2));