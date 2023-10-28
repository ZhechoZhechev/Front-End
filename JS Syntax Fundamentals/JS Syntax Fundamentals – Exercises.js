// 01. Ages

function AgesDefiner(age) {
    let result;
    if (age >= 0 && age <= 2) {
        result = "baby";
    } else if (age >= 3 && age <= 13) {
        result = "child";
    } else if (age >= 14 && age <= 19) {
        result = "teenager";
    } else if (age >= 20 && age <= 65) {
        result = "adult";
    } else if (age >= 66) {
        result = "elder";
    }
    else {
        result = "out of bounds";
    }

    console.log(result);
}

AgesDefiner(100);

// 02. Vacation

function VacationPriceCalc(peopleCount, typeGroup, day) {
    let price;
    let total;
    if (typeGroup === "Students") {
        if (day === "Friday") {
            price = 8.45;
        } else if (day === "Saturday") {
            price = 9.80;
        } else if (day === "Sunday") {
            price = 10.46
        }

        total = price * peopleCount;
        if (peopleCount >= 30) {
            total *= 0.85;
        }
    } else if (typeGroup === "Business") {
        if (day === "Friday") {
            price = 10.90;
        } else if (day === "Saturday") {
            price = 15.60;
        } else if (day === "Sunday") {
            price = 16;
        }

        total = price * peopleCount;
        if (peopleCount >= 100) {
            total = price * (peopleCount - 10);
        }
    } else if (typeGroup === "Regular") {
        if (day === "Friday") {
            price = 15;
        } else if (day === "Saturday") {
            price = 20;
        } else if (day === "Sunday") {
            price = 22.50;
        }

        total = price * peopleCount;
        if (peopleCount >= 10 && peopleCount <= 20) {
            total *= 0.95;
        }
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}

VacationPriceCalc(40,  "Regular", "Saturday")

// 03. Leap Year

function IfYearIsLeap(year){
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("yes");
    } else{
        console.log("no"); 
    }
}

IfYearIsLeap(4);

// 04. Print and Sum

function PrintAndSum(start, end){
    let string = "";
    let sum = 0;
    for (let i = start; i <= end; i++) {
        currNum = i.toString() + " ";
        string += currNum;
        sum += i;
    }

    console.log(string);
    console.log(`Sum: ${sum}`);
}

PrintAndSum(0, 26);

//05. Multiplication Table

function MultiplicationTable(num){
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

MultiplicationTable(5);

//06. Sum Digits

function SumDigits(num){
    let numAsString = num.toString();
    let sum = 0;

for (let index = 0; index < numAsString.length; index++) {
    sum +=  Number(numAsString[index]);
}

    console.log(sum);
}

SumDigits(543);