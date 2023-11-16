//01. Class Storage 

class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }

    getProducts() {
        let output = [];
        this.storage.forEach(product => {
            output.push(JSON.stringify(product));
        })
        return output.join('\n');
    }

}

// class Storage {
//     constructor(capacity){
//         this.capacity = capacity;
//         this.storage = [];
//     }

//     get totalCost(){
//         return this.storage.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
//     }

//     addProduct(product){
//         this.storage.push(product);
//         this.capacity -= product.quantity;
//     }

//     getProducts(){
//         let output = [];
//         this.storage.forEach(product => {
//             output.push(JSON.stringify(product));
//         })
//         return output.join('\n');
//     }

// }

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

//02. Catalogie

function createStorage(arr) {
    arr = arr.sort((a, b) => a.localeCompare(b));
    const objects = arr.reduce((acc, curr) => {
        const [fruit, value] = curr.split(" : ");
        acc[fruit] = Number(value);
        return acc;
    }, {})

    const keys = Object.keys(objects);
    let firstLetter = keys[0][0];
    console.log(firstLetter);

    keys.forEach(key => {
        const currLetter = key[0];
        if (firstLetter !== currLetter) {
            firstLetter = currLetter
            console.log(currLetter);
        }

        console.log(`  ${key}: ${objects[key]}`);
    });

}

createStorage([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);

//03. Class Laptop

class Laptop {
    constructor(info, quality) {
        this.quality = quality;
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand
        };
        this.isOn = false;
    }

    get price() {
        return (800 - (this.info.age * 2) + (this.quality * 0.5));
    }

    turnOn() {
        this.isOn = true;
        this.quality -= 1;
    }

    turnOff() {
        this.isOn = false;
        this.quality -= 1;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }
}

let info = { producer: "Dell", age: 2, brand: "XPS" }
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)

//04. Flight Schedule

function displayFlights(arr) {
    const comm = arr.pop().toString();
    const cancelledFlights = arr.pop();
    const flights = arr.pop();

    const flightMap = flights.reduce((acc, curr) => {
        const [number, ...rest] = curr.split(" ");
        let destination = rest.join(" ");
        acc[number] = {
            Destination: destination,
            Status: "Ready to fly"
        }
        return acc;
    }, {});

    cancelledFlights.forEach(line => {
        const [number, status] = line.split(" ");
        if (flightMap[number]) {
            flightMap[number].Status = "Cancelled";
        }
    });

    Object.entries(flightMap).forEach(([number, data]) => {
        if (data.Status === comm) {
            console.log(data);
        };
    });
}

displayFlights([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]);

//05. School Register 

function sortStudents(arr) {
    let schoolRegister = {};

    arr.forEach(line => {
        let tokens = line.split(", ")
        let name = tokens[0].split(": ")[1];
        let grade = Number(tokens[1].split(": ")[1]) + 1;
        let avrgScore = Number(tokens[2].split(": ")[1]);

        if (avrgScore > 3) {
            let student = { name, avrgScore };
            if (!schoolRegister[grade]) {
                schoolRegister[grade] = [];
            }
            schoolRegister[grade].push(student);
        }
    });

    sortedKeys = Object.keys(schoolRegister).sort((a, b) => a - b);

    sortedKeys.forEach(grade => {
        let students = schoolRegister[grade];
        console.log(`${grade} Grade`);
        let studenNames = students.map(sn => sn.name).join(", ");
        console.log(`List of students: ${studenNames}`);
        let avrgScore = avrgGrade(students);
        console.log(`Average annual score from last year: ${avrgScore}`)

        console.log();
    })

    function avrgGrade(arr){
        let avrgScoreArr = arr.map(s => s.avrgScore);
        let avrgScore = avrgScoreArr.reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0);
        avrgScore = avrgScore / avrgScoreArr.length;
        return avrgScore.toFixed(2);
    }
}

sortStudents([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);

//06. Browser History

function browserActions(obj, arr) {
    let browserStatus = obj;

    for (let action of arr) {
        if(action.startsWith("Open")) {
            let site = action.split(" ")[1];
            browserStatus["Open Tabs"].push(site);
            browserStatus["Browser Logs"].push(`Open ${site}`);
        } else if (action.startsWith("Close")) {
            let site = action.split(" ")[1];
            if (browserStatus["Open Tabs"].includes(site)) {
                browserStatus["Open Tabs"] = browserStatus["Open Tabs"].filter(tab => tab !== site);
                browserStatus["Recently Closed"].push(site);
                browserStatus["Browser Logs"].push(`Close ${site}`);
            }
        } else {
            browserStatus["Open Tabs"] = [];
            browserStatus["Recently Closed"] = [];
            browserStatus["Browser Logs"] = [];
        }
    }

    console.log(`${browserStatus["Browser Name"]}
Open Tabs: ${browserStatus["Open Tabs"].join(', ')}
Recently Closed: ${browserStatus["Recently Closed"].join(', ')}
Browser Logs: ${browserStatus["Browser Logs"].join(', ')}`);
}

browserActions({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
}, ["Close Facebook", "Open StackOverFlow", "Open Google"]);