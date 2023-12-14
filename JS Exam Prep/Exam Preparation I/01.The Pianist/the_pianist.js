
function solve(input) {
    const piecesNum = input.shift();
    const piecesInfo = input.splice(0, piecesNum);
    const commandsArr = input

    let music = {};
    piecesInfo.forEach(line => {
        const [piece, composer, key] = line.split("|");
        music[piece] = { composer, key };
    });

    while (true) {
        let line = commandsArr.shift();

        if (line === "Stop") break;

        let commands = line.split("|");
        let command = commands[0];
        let piece = commands[1];
        let arg3 = commands[2];
        let arg4 = commands[3];
        switch (command) {
            case "Add":
                let composer = arg3;
                let key = arg4;
                if (!music[piece]) {
                    music[piece] = { composer, key };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                } else {
                    console.log(`${piece} is already in the collection!`)
                }
                break;
            case "Remove":
                if (music[piece]) {
                    delete music[piece];
                    console.log(`Successfully removed ${piece}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
            case "ChangeKey":
                let newKey = arg3;
                if (music[piece]) {
                    music[piece].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
        }
    }

    for (const key in music) {
        console.log(`${key} -> Composer: ${music[key].composer}, Key: ${music[key].key}`)
    }
}

const input = [
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
];
solve(input);