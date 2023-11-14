//01. Employees

function employeesList(arr) {
    const employees = arr.reduce((acc, curr) => {
        acc[curr] = curr.length;
        return acc;
    }, {});

    const keyValue = Object.entries(employees);

    keyValue.forEach(keyValue => {
        let result = `Name: ${keyValue[0]} -- Personal Number: ${keyValue[1]}`
        console.log(result);
    });
}

employeesList([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);

//02. Towns

function displayTowns(arr) {
    const citiesObj = arr.map(element => {
        const [town, latitude, longitude] = element.split(" | ");
        let obj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        return obj;
    });

    citiesObj.forEach(obj => {
        console.log(obj);
    });
}

displayTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

//03. Store Provision

function calcStock(stock, products) {
    const combinedProducts = [...stock, ...products];

    const finalObj = combinedProducts.reduce((acc, curr, indx) => {
        if (indx % 2 === 0) {

            prodValue = Number(combinedProducts[indx + 1]);
            if (!acc[curr]) {
                acc[curr] = 0;
            }
            acc[curr] += prodValue;
        }

        return acc;
    }, {});

    const keyValue = Object.entries(finalObj);

    keyValue.forEach(ele => {
        console.log(`${ele[0]} -> ${ele[1]}`);
    })
}

calcStock([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])

//04. Movies

function moviesInfo(arr) {
    let movies = [];

    arr.forEach(line => {
        if (line.includes("addMovie")) {
            const [_, name] = line.split("addMovie ");
            movies.push({ name, });
        } else if (line.includes("directedBy")) {
            const [movieName, director] = line.split(" directedBy ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes("onDate")) {
            const [movieName, date] = line.split(" onDate ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    })


    movies
        .filter(m => m.name && m.director && m.date)
        .forEach(m => console.log(JSON.stringify(m)));
}

moviesInfo([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);

//05. Inventory

function sortInventory(arr) {
    let heroes = [];

    arr.map(line => {
        const [heroName, level, items] = line.split(" / ");
        heroes.push({ heroName, level, items });
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.heroName}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    });
}

sortInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

//06. Words Tracker

function keepTrackOfWords(arr) {
    const [words, ...restWords] = arr;

    searchWords = words.split(" ");

    let wordsCount = {};

    searchWords.forEach(word => {
        const occurances = restWords.filter(w => w === word).length;
        wordsCount[word] = occurances;
    });

    const array = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);
    array.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`);
    })
}

keepTrackOfWords([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);

//07. Odd Occurrences

function countOddAppearances(arr) {
    const wordsArr = arr.toLowerCase().split(" ");

    const oddWords = new Set();

    wordsArr.forEach(word => {
        const wordOccurancese = wordsArr.filter(x => x === word).length;
        if (wordOccurancese % 2 !== 0) {
            oddWords.add(word);
        }
    });

    console.log(Array.from(oddWords).join(" "));
}

countOddAppearances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

//08. Piccolo

function parking(arr) {

    let carsLeft = new Set();

    arr.forEach(line => {
        const [command, carNumber] = line.split(", ");

        if (command === "IN") {
            carsLeft.add(carNumber);
        } else if (command === "OUT") {
            carsLeft.delete(carNumber);
        }
    });

    Array.from(carsLeft).sort((a, b) => a.localeCompare(b)).forEach(carnum => {
        console.log(carnum);
    })
}

parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

//09. Make a Dictionary

function makeDictionay(arr) {
    const dictTerms = arr.reduce((acc, curr) => {

        const term = JSON.parse(curr);
        acc = { ...acc, ...term };

        return acc;
    }, {});

    const sortedDicKeys = Object.keys(dictTerms).sort();

    sortedDicKeys.forEach(key => {
        console.log(`Term: ${key} => Definition: ${dictTerms[key]}`);
    })
}

makeDictionay([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);

//10. Class Vehicle

class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        };
        this.fuel = fuel;
    };
    drive(fuelLost) {
        this.fuel -= fuelLost;
    };
}

let parts = {engine: 9, power: 500};
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);