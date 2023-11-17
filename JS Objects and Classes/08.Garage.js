function storeCars(arr) {
    let garages = {};

    arr.forEach(line => {
        let [garageNum, rest] = line.split(" - ");
        let car = {};

        let info = rest.split(", ");
        info.forEach(couple => {
            let [key, value] = couple.split(": ");
            car[key] = value;
        })

        if (garages[garageNum]) {
            garages[garageNum].push(car);
        } else {
            garages[garageNum] = [car];
        }
    });

    Object.entries(garages).forEach(([garageNum, cars]) => {
        console.log(`Garage № ${garageNum}`);
        cars.forEach(car => {
            let carDetails = Object.entries(car).map(([key, value]) => `${key} - ${value}`);
            console.log(`--- ${carDetails.join(', ')}`);
        });
    });
}


storeCars(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);



    // function solveGarageArray(input) {
    //     let garages = [];
    //     for (const line of input) {
    //         let [garageNumber, carInfo] = line.split(' - ');
    //         let found = garages.find(g => g.garageNumber === garageNumber);
    //         if (!found) {
    //             garages.push({
    //                 garageNumber: garageNumber,
    //                 carInfo: []
    //             });
    //             found = garages.find(g => g.garageNumber === garageNumber);
    //         }
    //         found.carInfo.push(carInfo);
    //     }
    //     let output = '';
    //     garages.forEach(garage => {
    //         output += `Garage № ${garage.garageNumber}\n`;
    //         for (let currCar of garage.carInfo) {
    //             currCar = currCar.replace(/: /g, ' - ');
    //             output += `--- ${currCar}\n`;
    //         }
    //     });
    //     console.log(output);
    // }


    // solveGarageArray(['1 - color: blue, fuel type: diesel',
    // '1 - color: red, manufacture: Audi',
    // '2 - fuel type: petrol',
    // '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);