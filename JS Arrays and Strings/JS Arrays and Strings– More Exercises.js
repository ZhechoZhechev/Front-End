//01. Login

function tryToLogin(arr) {
    let username = arr.shift();
    let reverseUsername = username.split("").reverse().join("");
    let tryouts = 0;

    for (let element of arr) {

        if (element === reverseUsername) {
            console.log(`User ${username} logged in.`);
            return;
        }

        if (tryouts >= 3) {
            console.log(`User ${username} blocked!`);
            return;
        }

        if ((element !== reverseUsername)) {
            console.log("Incorrect password. Try again.");
            tryouts++;
        }
    }
}

tryToLogin(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

//02. Bitcoin "Mining"

function miningForBitcoins(arr) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    const minusThirthyPercents = 0.70;
    let dayFirstBitcoinBought = 0;
    let bitcoinsTotal = 0;
    let moneyleft = 0
    let totalLeva = 0;

    for (let index = 0; index < arr.length; index++) {

        if ((index + 1) % 3 !== 0) {
            totalLeva += arr[index] * goldPrice;
        } else {
            totalLeva += (arr[index] * minusThirthyPercents) * goldPrice;
        }

        if (totalLeva >= bitcoinPrice &&
            dayFirstBitcoinBought === 0) {
            dayFirstBitcoinBought = index + 1;
        }

    }
    bitcoinsTotal = Math.floor(totalLeva / bitcoinPrice);
    moneyleft = totalLeva - (bitcoinPrice * bitcoinsTotal);

    console.log(`Bought bitcoins: ${bitcoinsTotal}`);
    if (dayFirstBitcoinBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoinBought}`);
    }
    console.log(`Left money: ${moneyleft.toFixed(2)} lv.`)
}

miningForBitcoins([3124.15, 504.212, 2511.124]);

//03. The Pyramid of King Djoser

function buildPiramyd(base, increment) {

    let totalstone = 0;
    let totalmarble = 0;
    let totallapis = 0;
    let totalgold = 0;
    let row = 0;
    let currentbase = base;

    while (currentbase > 2) {
        let marble = (currentbase * 4) - 4;
        let stone = (currentbase * currentbase) - marble;
        totalstone += stone;

        row++;

        if (row % 5 === 0) {
            totallapis += marble;
        } else {
            totalmarble += marble;
        }

        currentbase -= 2;
    }

    row++;

    let gold = currentbase * currentbase;

    stone = Math.ceil(totalstone * increment);
    marble = Math.ceil(totalmarble * increment);
    lapis = Math.ceil(totallapis * increment);
    totalgold = Math.ceil(gold * increment);
    totalHeight = Math.floor(row*increment);
 
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}

buildPiramyd(11, 0.75)