let input = [    
    '4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'Refuel - Dave - 40',
'Explore - Bob - 40',
'Breathe - Charlie - 30',
'Explore - Alice - 40',
'End'];

function solve(input) {
    const astronautCount = input.shift();
    const astronautInfo = input.splice(0, astronautCount);

    const maxenergy = 200;
    const maxOxygen = 100;

    let astronauts = {};

    astronautInfo.forEach(line => {
        const [name, oxygen, energy] = line.split(" ");
        astronauts[name] = {
            oxygen: Number(oxygen),
            energy: Number(energy)
        }
    });

    while (true) {
        let line = input.shift();

        if (line === "End") break;

        const [command, astronautName, arg] = line.split(" - ");
        switch (command) {
            case "Explore":
                let energyNeeded = arg;
                if (astronauts[astronautName].energy >= energyNeeded) {
                    astronauts[astronautName].energy -= energyNeeded;
                    console.log(`${astronautName} has successfully explored a new area and now has ${astronauts[astronautName].energy} energy!`)
                } else {
                    console.log(`${astronautName} does not have enough energy to explore!`)
                }
                break;
            case "Refuel":
                const energyToRefuel = Number(arg);
                initialEnergy = astronauts[astronautName].energy;
                astronauts[astronautName].energy = energyToRefuel + astronauts[astronautName].energy > maxenergy ?
                    maxenergy : energyToRefuel + astronauts[astronautName].energy;
                currEenrgy = astronauts[astronautName].energy;

                console.log(`${astronautName} refueled their energy by ${currEenrgy - initialEnergy}!`);
                break;
            case "Breathe":
                const oxygenTorefuel = Number(arg);
                initialOxygen = astronauts[astronautName].oxygen;
                astronauts[astronautName].oxygen = oxygenTorefuel + astronauts[astronautName].oxygen > maxOxygen ?
                    maxOxygen : oxygenTorefuel + astronauts[astronautName].oxygen;
                currOxygen = astronauts[astronautName].oxygen;

                console.log(`${astronautName} took a breath and recovered ${currOxygen - initialOxygen} oxygen!`)
                break;
        }
    }

    for (const key in astronauts) {
        console.log(`Astronaut: ${key}, Oxygen: ${astronauts[key].oxygen}, Energy: ${astronauts[key].energy}`);
    }
}

solve(input);