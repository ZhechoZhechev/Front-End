//01. Validity Checker

function ValidityChecker(x1, y1, x2, y2) {
    let firstToNull = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
    let secondToNull = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2));
    let firstToSecond = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    if (firstToNull % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (secondToNull % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (firstToSecond % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

ValidityChecker(2, 1, 1, 1);

//02. Words Uppercase

function WordsExtractor(text) {
    const delimiterRegex = /[\W]+/g;

    let arrOfwords = text.split(delimiterRegex);

    arrOfwords = arrOfwords.map(word => word.toUpperCase());
    arrOfwords = arrOfwords.filter(word => word.length > 0);

    let result = arrOfwords.join(", ");

    console.log(result);
}

WordsExtractor('Hi, how are you?');



function solve(text) {

    let result = text.toUpperCase()
        .split(/[\W]+/)
        .filter(w => w.length > 0)
        .join(", ");

    console.log(result);
}

//03. Calculator

function Calculator(num1, operand, num2) {
    let result;
    switch (operand) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
    }

    console.log(result.toFixed(2));
}

Calculator(25.5,'-',3);

//04. Gladiator Expenses

function CalcGladiatorExpenses(lostCount, helmPrice, swordPrice, shieldPrice, armorPrice){
    
    let helmRepairsCost = Math.floor(lostCount / 2) * helmPrice;
    let swordRepairCost = Math.floor(lostCount / 3) * swordPrice;
    let shieldRepairCost = Math.floor(lostCount / 6) * shieldPrice;
    let amrorRepairCost = Math.floor(lostCount / 12) * armorPrice;

    let totalCosts = helmRepairsCost + swordRepairCost + shieldRepairCost + amrorRepairCost;
    console.log(`Gladiator expenses: ${totalCosts.toFixed(2)} aureus`);
}

CalcGladiatorExpenses(23, 12.50, 21.50, 40, 200);

//05. Spices Must Flow

function DaysOfHarvestCalc(startingYield){
    const crewCosts = 26;
    const crewCostsWhenYieldOver = 26;
    let days = 0;
    let totalHarvested = 0;

    while (startingYield >= 100) {
        totalHarvested += startingYield - crewCosts;
        startingYield -= 10;
        days ++;
    }

    totalHarvested -= crewCostsWhenYieldOver;

    if (totalHarvested < 0) {
        totalHarvested = 0;
    }

    console.log(days);
    console.log(totalHarvested)
}

DaysOfHarvestCalc(0);