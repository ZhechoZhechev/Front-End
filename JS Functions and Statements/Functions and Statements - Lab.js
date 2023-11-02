//01. Format Grade

function formatGrade(grade) {
    if (grade < 3) {
        console.log("Fail (2)")
    } else if (grade < 3.5) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.5) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.5) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

formatGrade(5.6)

//02. Math Power

function mathPower(number, power) {
    console.log(Math.pow(number, power));
}

mathPower(3, 4);

//03. Repeat String

function repeatStrng(string, timesCount) {
    return string.repeat(timesCount);
}

let result = repeatStrng("abc", 3);
console.log(result);

//04. Orders


//04-a
const productPrices = {
    coffee: 1.50,
    water: 1.00,
    coke: 1.40,
    snacks: 2.00
};

function calculateTotalPrice(product, quantity) {
    const pricePerItem = productPrices[product];
    const totalPrice = pricePerItem * quantity;
    console.log(`${totalPrice.toFixed(2)}`);
}

calculateTotalPrice("coffee", 2);

//04-b

function calculateTotalPrice1(product, quantity) {
    let result;
    switch (product) {
        case "coffee":
            result = quantity * 1.5
            break;
        case "water":
            result = quantity * 1
            break;
        case "coke":
            result = quantity * 1.4
            break;
        case "snacks":
            result = quantity * 2
            break;
    }

    console.log(`${result.toFixed(2)}`)
}

calculateTotalPrice1("water", 5);

//05. Simple Calculator

//05 - a

function calculator(num1, num2, operand) {
    if (operand === "multiply") return num1 * num2;
    else if (operand === "divide") return num1 / num2;
    else if (operand === "add") return num1 + num2;
    else return num1 - num2;
}

console.log(calculator(5, 5, "multiply"));

//05 - b

let operandObject = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    add: (a, b) => a + b,
    substract: (a, b) => a - b
}

const calculator1 = (num1, num2, operand) =>
    operandObject[operand](num1, num2);

console.log(calculator1(5, 5, "multiply"))

//06 Sign Check

function checkSign(num1, num2, num3) {

    let minusesCount = 0;

    if (num1 < 0) minusesCount++;
    if (num2 < 0) minusesCount++;
    if (num3 < 0) minusesCount++;

    let result = minusesCount % 2 === 0 ? "Positive" : "Negative";

    console.log(result);
}

checkSign(-6, -12, -14);