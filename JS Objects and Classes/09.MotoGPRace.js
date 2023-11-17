function raceMotoGP(input){
    let driversNum = Number(input.shift());

    let drivers = {};

    for (let i = 0; i < driversNum; i++) {
        args = input[i].split("|");
        let driversName = args[0];
        let fuelCapacity = Number(args[1]);
        let position = Number(args[2]);

        drivers[driversName] = ({fuelCapacity, position});
    }

    let index = driversNum;

    while (index < input.length && input[index] !== "Finish") {
        const [action, rider, arg2, arg3] = input[index].split(" - ");
        let minFuel = Number(arg2);
        let changedPossition = Number(arg3);
        if (action === "StopForFuel") {
            if(drivers[rider].fuelCapacity < minFuel){
                drivers[rider].position = changedPossition;
                drivers[rider].fuelCapacity = minFuel;
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPossition}.`);
            } else{
                console.log(`${rider} does not need to stop for fuel!`)
            }
        } else if (action === "Overtaking"){
            let rider1 = rider;
            let rider2 = arg2;
            if(drivers[rider1].position < drivers[rider2].position){
               let inter = drivers[rider1].position;
               drivers[rider1].position = drivers[rider2].position;
               drivers[rider2].position = inter;
               
               console.log(`${rider1} overtook ${rider2}!`);
            }
        } else {
            let lapsLeft = Number(arg2);
            delete drivers[rider];
            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        }

        index++;
    }

for (const rider in drivers) {
    console.log(rider);
    console.log(`  Final position: ${drivers[rider].position}`);
}
}

raceMotoGP((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]));