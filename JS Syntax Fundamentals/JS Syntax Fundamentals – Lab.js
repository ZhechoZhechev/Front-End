// 1. Multiply the Number by 2

function MultiplyByTwo(num) {
    console.log(num * 2);
}

MultiplyByTwo(5);

// 2. Student Information

let student = {
    name: "John",
    age: 15,
    averrageGrade: 5.54678
};
let student1 = {
    name: "Steve",
    age: 16,
    averrageGrade: 2.1426
}

function StudentDetails(student) {
    console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.averrageGrade.toFixed(2)}`)
}

StudentDetails(student1);

// 3. Excellent Grade

function IsExellent(grade) {
    if (grade >= 5.50) {
        console.log("Excellent")
    } else {
        console.log("Not excellent")
    }
}

IsExellent(4.35)

// 4. Month Printer

function PrintMonth(num) {
    switch (num) {
        case 1:
            console.log("January")
            break;
        case 2:
            console.log("February")
            break;
        case 3:
            console.log("March")
            break;
        case 4:
            console.log("April")
            break;
        case 5:
            console.log("May")
            break;
        case 6:
            console.log("June")
            break;
        case 7:
            console.log("July")
            break;
        case 8:
            console.log("August")
            break;
        case 9:
            console.log("September")
            break;
        case 10:
            console.log("October")
            break;
        case 11:
            console.log("November")
            break;
        case 12:
            console.log("December")
            break;
        default:
            console.log("Error!")
            break;
    }

}

PrintMonth(13);

// 5. Math Operations

function SimpCalculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            console.log(num1 + num2)
            break;
        case "-":
            console.log(num1 - num2)
            break;
        case "*":
            console.log(num1 * num2)
            break;
        case "/":
            console.log(num1 / num2)
            break;
        case "%":
            console.log(num1 % num2)
            break;
        case "**":
            console.log(num1 ** num2)
            break;
        default:
            console.log("Not vallid operator!");
            break;
    }
}

SimpCalculator(3, 5.5, '**');

// 6. Largest Number

function LargestNumber(num1, num2, num3) {
    let largest = -Infinity;
    if (num1 > num2 && num1 > num3) {
        largest = num1;
    } else if (num2 > num1 && num2 > num3) {
        largest = num2;
    } else if (num3 > num1 && num3 > num2) {
        largest = num3;
    }

    return console.log(`The largest number is ${largest}.`);
}

LargestNumber(-3, -5, -22.5);

// 7. Theatre Promotions

function TicketPrice(day, age) {

    let price;

    if (age >= 0 && age <= 18) {
        if (day === "Weekday") {
            price = "12$";
        } else if (day === "Weekend") {
            price = "15$";
        }
        else {
            price = "5$";
        }
    } else if (age > 18 && age <= 64) {
        if (day === "Weekday") {
            price = "18$";
        } else if (day === "Weekend") {
            price = "20$";
        }
        else {
            price = "12$";
        }
    } else if (age > 64 && age <= 122) {
        if (day === "Weekday") {
            price = "12$";
        } else if (day === "Weekend") {
            price = "15$";
        }
        else {
            price = "10$";
        }
    } else {
        price = "Error!"
    }

    console.log(price)
}

TicketPrice("Weekday", 123);

// 8. Circle Area


function AreaIfNumber(num) {
    let result;
    let typeInput = typeof (num);

    typeInput === "number" ?
        result = (Math.PI * Math.pow(num, 2)).toFixed(2) :
        result = `We can not calculate the circle area, because we receive a ${typeInput}.`;

    console.log(result);
}

AreaIfNumber("name");

// 9. Numbers from 1 to 5

function Printer() {
    for (let i = 1; i <= 5; i++) {
        console.log(i)
    }
}

Printer();

// 10. Numbers from M to N

function AdvancedPrinter(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i);
    }
}

AdvancedPrinter(4, 1);

// 11. Sum First and Last Array Elements

function FirstLastNumSum(arr) {
    console.log(arr[0] + arr[arr.length - 1]);
}

FirstLastNumSum([10, 17, 22, 33]);

// 12. Reverse an Array of Numbers

function ReverseArray(num, array) {
    let newArr = array.slice(0, num);
    console.log(newArr.reverse().join(" "));
}

ReverseArray(2, [66, 43, 75, 89, 47]);

// 13. Even and Odd Subtraction

function EvenOddSubstraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(element => {
        element % 2 === 0 ? evenSum += element :
            oddSum += element;
    });

    console.log(evenSum - oddSum);
}

EvenOddSubstraction([3,5,7,9]);

// 14. Substring

function Substring(text, startIndex, endIndex){
    let result = text.substring(startIndex, endIndex + 1);
    console.log(result);
}

Substring('ASentence', 1, 8);

// 15. Censored Words

function CensorWord(text, word){
    
    let censoredText = text;

    while(censoredText.includes(word)){
        let censorCharnumber = word.length;
        censoredText = censoredText.replace(word, "*".repeat(censorCharnumber));
    }

    console.log(censoredText);
}

CensorWord("A small sentence with some small words", "small");

// 16. Count String Occurrences

function WordOccurances(text, word){
    textArray = text.split(" ");
    textArray = textArray.filter(c => c === word);
    let wordCount = textArray.length;

    console.log(wordCount);
}

WordOccurances('This is a word and it also is a sentence', 'is');