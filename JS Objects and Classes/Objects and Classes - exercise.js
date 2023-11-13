//01. Employees

function employeesList(arr) {
    const employees = arr.reduce((acc, curr) => {
        acc[curr] = curr.length;
        return acc;
    }, {});

    const keyValue = Object.entries(employees);

    keyValue.forEach(keyValue => {
        let result = `Name: ${keyValue[0]} -- Personal Number: ${keyValue[1]}`
        console.log(result);
    });
}

employeesList([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);

//02. Towns

function displayTowns(arr) {
    const citiesObj = arr.map(element => {
        const [town, latitude, longitude] = element.split(" | ");
        let obj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        return obj;
    });

    citiesObj.forEach(obj => {
        console.log(obj);
    });
}

displayTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

//03. Store Provision

function calcStock(stock, products) {
    const combinedProducts = [...stock, ...products];

    const finalObj = combinedProducts.reduce((acc, curr, indx) => {
        if (indx % 2 === 0) {

            prodValue = Number(combinedProducts[indx + 1]);
            if (!acc[curr]) {
                acc[curr] = 0;
            }
            acc[curr] += prodValue;
        }

        return acc;
    }, {});

    const keyValue = Object.entries(finalObj);

    keyValue.forEach(ele => {
        console.log(`${ele[0]} -> ${ele[1]}`);
    })
}

calcStock([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])

//04. Movies

function moviesInfo(arr){
    let movies = [];

    arr.forEach(line =>{
        if (line.includes("addMovie")) {
            const [_, name] = line.split("addMovie ");
            movies.push({name,});
        } else if(line.includes("directedBy")){
            const [movieName, director] = line.split(" directedBy ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes("onDate")){
            const [movieName, date] = line.split(" onDate ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    })


    movies
    .filter(m => m.name && m.director && m.date)
    .forEach(m => console.log(JSON.stringify(m)));
}

moviesInfo([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);