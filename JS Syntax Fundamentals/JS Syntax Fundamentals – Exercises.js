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

VacationPriceCalc(40, "Regular", "Saturday")

// 03. Leap Year

function IfYearIsLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

IfYearIsLeap(4);

// 04. Print and Sum

function PrintAndSum(start, end) {
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

function MultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

MultiplicationTable(5);

//06. Sum Digits

function SumDigits(num) {
    let numAsString = num.toString();
    let sum = 0;

    for (let index = 0; index < numAsString.length; index++) {
        sum += Number(numAsString[index]);
    }

    console.log(sum);
}

SumDigits(543);

//07. Cahrs to String

function CharsToString(a, b, c) {
    console.log("" + a + b + c);
}

CharsToString('a', 'b', 'c');

//08. Reversed Chars

function ReverseChars(char1, char2, char3) {
    console.log(char3 + " " + char2 + " " + char1)
}

ReverseChars('1', 'L', '&')

//09. Fruit

function FruitsPrice(fruit, weight, pricePerKg) {
    let gramsToKg = weight / 1000;
    let money = gramsToKg * pricePerKg;

    console.log(`I need $${money.toFixed(2)} to buy ${gramsToKg.toFixed(2)} kilograms ${fruit}.`);
}

FruitsPrice('apple', 1563, 2.35);


//10. Same Numbers

function IfNumbersAreSame(int) {
    let numAsString = int.toString();
    let sum = 0;
    let firstDigit = numAsString[0];
    let allDigitsAreSame;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);

        if (firstDigit === numAsString[i]) {
            allDigitsAreSame = true;
        } else {
            allDigitsAreSame = false;
        }
    }

    console.log(allDigitsAreSame);
    console.log(sum);
}

IfNumbersAreSame(1234);

//11. Road Radar

function SpeedLimits(speed, area) {
    const motorWaySpeedLimit = 130;
    const interstateSpeedLimit = 90;
    const citySpeedLimit = 50;
    const reesidetialSpeedLimit = 20;
    let result;

    switch (area) {
        case "motorway":
            let motorwayOverSpeed = speed - motorWaySpeedLimit;
            if (speed <= motorWaySpeedLimit) {
                result = `Driving ${speed} km/h in a ${motorWaySpeedLimit} zone`
            } else if (motorwayOverSpeed <= 20) {
                result = `The speed is ${motorwayOverSpeed} km/h faster than the allowed speed of ${motorWaySpeedLimit} - speeding`
            } else if (motorwayOverSpeed > 20 && motorwayOverSpeed <= 40) {
                result = `The speed is ${motorwayOverSpeed} km/h faster than the allowed speed of ${motorWaySpeedLimit} - excessive speeding`
            }
            else {
                result = `The speed is ${motorwayOverSpeed} km/h faster than the allowed speed of ${motorWaySpeedLimit} - reckless driving`
            }
            break;
        case "interstate":
            let interstateOverSpeed = speed - interstateSpeedLimit;
            if (speed <= interstateSpeedLimit) {
                result = `Driving ${speed} km/h in a ${interstateSpeedLimit} zone`
            } else if (interstateOverSpeed <= 20) {
                result = `The speed is ${interstateOverSpeed} km/h faster than the allowed speed of ${interstateSpeedLimit} - speeding`
            } else if (interstateOverSpeed > 20 && interstateOverSpeed <= 40) {
                result = `The speed is ${interstateOverSpeed} km/h faster than the allowed speed of ${interstateSpeedLimit} - excessive speeding`
            }
            else {
                result = `The speed is ${interstateOverSpeed} km/h faster than the allowed speed of ${interstateSpeedLimit} - reckless driving`
            }
            break;
        case "city":
            let cityOverSpeed = speed - citySpeedLimit;
            if (speed <= citySpeedLimit) {
                result = `Driving ${speed} km/h in a ${citySpeedLimit} zone`
            } else if (cityOverSpeed <= 20) {
                result = `The speed is ${cityOverSpeed} km/h faster than the allowed speed of ${citySpeedLimit} - speeding`
            } else if (cityOverSpeed > 20 && cityOverSpeed <= 40) {
                result = `The speed is ${cityOverSpeed} km/h faster than the allowed speed of ${citySpeedLimit} - excessive speeding`
            }
            else {
                result = `The speed is ${cityOverSpeed} km/h faster than the allowed speed of ${citySpeedLimit} - reckless driving`
            }
            break;
        case "residential":
            let residentialOverSpeed = speed - reesidetialSpeedLimit;
            if (speed <= reesidetialSpeedLimit) {
                result = `Driving ${speed} km/h in a ${reesidetialSpeedLimit} zone`
            } else if (residentialOverSpeed <= 20) {
                result = `The speed is ${residentialOverSpeed} km/h faster than the allowed speed of ${reesidetialSpeedLimit} - speeding`
            } else if (residentialOverSpeed > 20 && residentialOverSpeed <= 40) {
                result = `The speed is ${residentialOverSpeed} km/h faster than the allowed speed of ${reesidetialSpeedLimit} - excessive speeding`
            }
            else {
                result = `The speed is ${residentialOverSpeed} km/h faster than the allowed speed of ${reesidetialSpeedLimit} - reckless driving`
            }
            break;
    }

    console.log(result);
}

SpeedLimits(200, 'motorway');

//12. Cooking by Numbers

function CookingByNumbers(num, op1, op2, op3, op4, op5) {
    let number = Number(num);
    let opArray = [op1, op2, op3, op4, op5];

    for (let i = 0; i < opArray.length; i++) {

        const operation = opArray[i];

        switch (operation) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number -= (number * 0.2);
                break;
            default:
                break;
        }

        console.log(number);
    }
}

CookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
