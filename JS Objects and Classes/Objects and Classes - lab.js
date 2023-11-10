//01. Person Info

function objectCreator(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    }
    return person;
}

//02. City

function destrObject(obj) {
    const keys = Object.keys(obj);
    keys.forEach(key => {
        console.log(`${key} -> ${obj[key]}`)
    });
}

destrObject({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)

//03. City Taxes

function cityObjCreator(name, population, treasury) {
    const city = {
        name,
        population,
        treasury,
        taxrate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxrate;
        },
        applyGrowth(percentage) {
            this.population *= 1 + percentage / 100;
        },
        applyRecession(percentage) {
            this.treasury *= 1 - percentage / 100;
        }
    }

    return city;
}

const city = cityObjCreator('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

//04. Convert to Object

function JSONtoObject(json) {
    const object = JSON.parse(json);
    Object.entries(object).forEach(entri => {
        const [key, value] = entri;
        console.log(`${key}: ${value}`);
    });
}

JSONtoObject('{"name": "George", "age": 40, "town": "Sofia"}');

//05. Convert to JSON

function objectToJSON(name, lastName, hairColor){
    const person = {
        name,
        lastName,
        hairColor
    }

    const personAsJSON = JSON.stringify(person);
    console.log(personAsJSON);
}

objectToJSON('George', 'Jones', 'Brown');

//06. Phone Book 

function makePhonebook(arr){
    const phoneBook = arr.reduce((acc, curr) =>{
        const pairs = curr.split(" ");
        const[name, phone] = pairs;
        acc[name] = phone;
        return acc;
    }, {});

    Object.entries(phoneBook).forEach(entry =>{
        const [name, phone] = entry;
        console.log(`${name} -> ${phone}`);
    })
}

makePhonebook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);

//07. Meetings

function arrangeMeetings(arr){
    const meetings = arr.reduce((acc, curr) =>{
        const [day, name] = curr.split(" ");

        if(acc[day]){
            console.log(`Conflict on ${day}!`);
        }
        else{
            acc[day] = name;
            console.log(`Scheduled for ${day}`);
        }

        return acc;
    }, {});

    Object.entries(meetings).forEach(entry =>{
        const [name, phone] = entry;
        console.log(`${name} -> ${phone}`);
    })
}

arrangeMeetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);

//08. Address Book

function createAddressBook(arr){
    const addressBook = arr.reduce((acc, curr) =>{
        const [name, address] = curr.split(":");
        acc[name] = address;

        return acc;
    }, {});

    const sortedAddressBook = Object.entries(addressBook);
    sortedAddressBook.sort((a,b) => a[0] .localeCompare(b[0]));

    sortedAddressBook.forEach(entry => {
        const name = entry[0];
        const address = entry[1];
        console.log(`${name} -> ${address}`);
    })
}

createAddressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);