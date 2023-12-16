function sovle(input) {
    const baristaCount = input.shift();
    const baristaInfo = input.splice(0, baristaCount);
    const commandArr = input;

    const baristas = {};

    baristaInfo.forEach(line => {
        const [name, shift, coffee] = line.split(" ");
        const coffeeArr = coffee.split(",");
        baristas[name] = {
            name,
            shift,
            coffee: coffeeArr
        }
    });

    while (true) {
        let line = commandArr.shift();
        if (line === "Closed") break;

        let commands = line.split(" / ");
        let command = commands[0];
        let baristaName = commands[1];
        let arg3 = commands[2];
        let arg4 = commands[3];

        switch (command) {
            case "Prepare":
                let shift = arg3;
                let coffeType = arg4;
                if (baristas[baristaName].shift === shift
                    && baristas[baristaName].coffee.includes(coffeType)) {
                    console.log(`${baristaName} has prepared a ${coffeType} for you!`)
                } else {
                    console.log(`${baristaName} is not available to prepare a ${coffeType}.`)
                }
                break;
            case "Change Shift":
                let newShift = arg3;
                baristas[baristaName].shift = newShift;
                console.log(`${baristaName} has updated his shift to: ${newShift}`);
                break;
            case "Learn":
                let newCoffeeType = arg3;
                if (baristas[baristaName].coffee.includes(newCoffeeType)) {
                    console.log(`${baristaName} knows how to make ${newCoffeeType}.`)
                } else {
                    baristas[baristaName].coffee.push(newCoffeeType);
                    console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
                }
                break;
        }
    }

    for (const baristaName in baristas) {
            const barista = baristas[baristaName];
            const drinks = barista.coffee.join(', ');
            console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${drinks}`);
    }
}

let input = ['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed'];

sovle(input);