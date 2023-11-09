//01. Car Wash

function caraWashing(commands) {
    value = 0;
    for (const command of commands) {
        switch (command) {
            case "soap":
                value += 10;
                break;
            case "water":
                value *= 1.20;
                break;
            case "vacuum cleaner":
                value *= 1.25;
                break;
            case "mud":
                value *= 0.90;
                break;
        }
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`)
}

caraWashing(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);

//02. Number Modification

function numberModifier(num){
    numAsArray = num.toString().split("");
    
    while (true) {
        numAverage = 0;
        numAsArray.forEach(digit => {
            numAverage += Number(digit);
        });
        
        numAverage = numAverage / numAsArray.length;

        if (numAverage > 5) {
            break;
        } else {
            numAsArray.push("9");
        }
    }

    console.log(numAsArray.join(""));
}

numberModifier(5835);

//03. Points Validation

function ValidityChecker(numArr) {
    let x1 = numArr[0];
    let y1 = numArr[1];
    let x2 = numArr[2];
    let y2 = numArr[3];

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

ValidityChecker([2, 1, 1, 1]);

//04. Radio Crystals

function radioCrystal(input){
    var target = Number(input[0]);
 
    function process(crystalThickness, action){
        switch(action) {
            case "cut":
                crystalThickness = crystalThickness / 4;
                cutCount++;
                break;
            case "lap":
                crystalThickness *= 0.8;
                lapCount++;
                break;
            case "grind":
                crystalThickness -= 20;
                grindCount++;
                break;
            case "etch":
                crystalThickness -= 2;
                etchCount++;
                break;
            case "xRay":
                crystalThickness += 1;
                xrayCount++;
                return crystalThickness;
        }
 
        return transportingWashing(crystalThickness);
    }
 
    function transportingWashing(crystalThickness) {
        return Math.floor(crystalThickness);
    }
 
    for(let i = 1; i < input.length; i++){
        var current = input[i];
        var cutCount = 0, lapCount = 0, grindCount = 0, etchCount = 0, xrayCount = 0;
        var used = false;
 
        console.log(`Processing chunk ${current} microns`);
 
        while(current != target){
            while(current / 4 >= target - 1){
                current = process(current,"cut");
            }
            while(current * 0.8 >= target - 1){
                current = process(current,"lap");
            }
            while(current - 20 >= target - 1){
                current = process(current,"grind");
            }
            while(current - 2 >= target - 1){
                current = process(current,"etch");
            }
            if(current + 1 == target){
                current = process(current,"xRay");
                used = true;
            }
        }
 
        if(cutCount > 0) {
            console.log(`Cut x${cutCount}`)
            console.log("Transporting and washing");
        }
 
        if(lapCount > 0) {
            console.log(`Lap x${lapCount}`)
            console.log("Transporting and washing");
        }
 
        if(grindCount > 0) {
            console.log(`Grind x${grindCount}`)
            console.log("Transporting and washing");
        }
 
        if(etchCount > 0) {
            console.log(`Etch x${etchCount}`)
            console.log("Transporting and washing");
        }
 
        if(used) {
            console.log(`X-ray x1`)
        }
 
        console.log(`Finished crystal ${target} microns`)
    }
}

radioCrystal([1375, 50000]);

//05. Print DNA 

function printDNA(n){
    let arr = 'ATCGTTAGGG'.split('')
    for(let i = 1; i <= n; i++){
        let [a, b] = arr.splice(0,2)
        if(i === 1 || i % 4 === 1){
            console.log(`**${a}${b}**`);
        }
        else if(i === 2 || i % 4 === 2){
            console.log(`*${a}--${b}*`);
        }
        else if(i === 3 || i % 4 === 3){
            console.log(`${a}----${b}`);
        }
        else if(i === 4 || i % 4 === 0){
            console.log(`*${a}--${b}*`);
        }
 
        arr.push(a)
        arr.push(b)
    }
}

printDNA(10);

