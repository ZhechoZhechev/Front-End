function uniqueArrays(arr) {
    arrAsNum = arr.map(x => JSON.parse(x));
    arrAsNum.forEach(element => {
        element.sort((a, b) => b - a);
    });

    let uniques = [];
    for (let i = 0; i < arrAsNum.length; i++) {

        let isUnique = true;
        for (let j = 0; j < uniques.length; j++) {
            if (arrAsNum[i].toString() === uniques[j].toString()) {
                isUnique = false;
                break;
            }

        }

        if (isUnique) {
            uniques.push(arrAsNum[i]);
        }

    }
        uniques.sort((a, b) => a.length - b.length);
        uniques.forEach(arr => {
            console.log(`[${arr.join(", ")}]`);
        })
        
    }


uniqueArrays(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]);