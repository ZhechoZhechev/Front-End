let input = (['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly']);

function solve(input) {
    let horses = input.shift();
    let horsesArr = horses.split("|");

    while (true) {
        let line = input.shift();
        if (line === "Finish") {
            break;
        }

        let args = line.split(" ");
        let command = args[0];
        let horseFirst = args[1];
        let horseSecond = args[2];

        let indexFirst = horsesArr.indexOf(horseFirst);
        let indexSecond = horsesArr.indexOf(horseSecond);


        switch (command) {
            case "Retake":
                if (indexFirst < indexSecond) {
                    horsesArr[indexFirst] = horseSecond;
                    horsesArr[indexSecond] = horseFirst;

                    console.log(`${horseFirst} retakes ${horseSecond}.`);
                }
                break;
            case "Trouble":
                if (indexFirst > 0) {
                    let horseBehind = horsesArr[indexFirst - 1];
                    horsesArr[indexFirst] = horseBehind;
                    horsesArr[indexFirst - 1] = horseFirst;
                    console.log(`Trouble for ${horseFirst} - drops one position.`);
                }
                break;
            case "Rage":
                if (indexFirst < horsesArr.length -2) {
                    let element = horsesArr.splice(indexFirst, 1)[0];
                    let newIndex = indexFirst  +2;
                    horsesArr.splice(newIndex, 0, element)
                } else if(indexFirst === horsesArr.length -2){
                    let element = horsesArr.splice(indexFirst, 1)[0];
                    let newIndex = indexFirst +1;
                    horsesArr.splice(newIndex, 0, element)
                }
                console.log(`${horseFirst} rages 2 positions ahead.`);
                break;
            case "Miracle":
                let lastHorse = horsesArr.shift();
                horsesArr.push(lastHorse);
                console.log(`What a miracle - ${lastHorse} becomes first.`);
                break;
        }

    }
    console.log(horsesArr.join("->"))
    console.log(`The winner is: ${horsesArr[horsesArr.length -1]}`)
}

solve(input)