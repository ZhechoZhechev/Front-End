function attachEvents() {
    const submitBtn = document.querySelector("#submit");
    const forecastDiv = document.querySelector("#forecast")
    const currForecastDiv = document.querySelector("#current");
    const upcomingForecastDiv = document.querySelector("#upcoming");
    

    submitBtn.addEventListener("click", handleRequest);

    async function handleRequest() {
        
        const locationInput = document.querySelector("#location").value;
        let info = await fetch("http://localhost:3030/jsonstore/forecaster/locations");
        let locations = await info.json();

        let currCityCode;
        locations.forEach(city => {
            if (city.name === locationInput) {
                currCityCode = city.code;
            }
        });

        forecastDiv.style.display = "block";
        
        try {
            
            let currConditionsInfo = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${currCityCode}`);
            let currConditions = await currConditionsInfo.json();
    
            let singleDayInfo = extractSingledayInfo(currConditions);
            currForecastDiv.appendChild(generateCurWeatherElements(singleDayInfo));
    
            let upcomingConditionsInfo = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${currCityCode}`);
            let upcomingConditions = await upcomingConditionsInfo.json();
            let upcomingValues = Object.values(upcomingConditions);
            let [upcommingArr, name] = upcomingValues;
    
    
            upcomingForecastDiv.appendChild(generateUpcomingWeatherElements(upcommingArr));
            
        } catch (error) {
            forecastDiv.textContent = "Error";
        }


    }

    function generateUpcomingWeatherElements(arrOfObjs){
        let upcomingForecastInfoDiv = document.createElement("div");
        upcomingForecastInfoDiv.classList.add("forecast-info");
        for (let i = 0; i < arrOfObjs.length; i++) {
            let upcomingSpan = document.createElement("span");
            upcomingSpan.classList.add("upcoming");
            for (let j = 0; j < arrOfObjs.length; j++) {
                let infoSpan = document.createElement("span");
                if (j === 0) {
                    infoSpan.classList.add("symbol");
                    infoSpan.textContent = returnSignIconFromArrOfObjects(arrOfObjs, i);
                    upcomingSpan.appendChild(infoSpan);
                } else if (j === 1) {
                    infoSpan.classList.add("forecast-data");
                    infoSpan.textContent = `${arrOfObjs[i]["low"]}°/${arrOfObjs[i]["high"]}°`
                    upcomingSpan.appendChild(infoSpan);
                } else if (j === 2){
                    infoSpan.classList.add("forecast-data");
                    infoSpan.textContent = arrOfObjs[i]["condition"]
                    upcomingSpan.appendChild(infoSpan); 
                }
                
            }
            upcomingForecastInfoDiv.appendChild(upcomingSpan);
            
        }
        return upcomingForecastInfoDiv;
    }

    function generateCurWeatherElements(arr){
        const forecastsDiv = document.createElement("div");
        forecastsDiv.classList.add("forecasts");
        const symbolSpan = document.createElement("span");
        symbolSpan.classList.add("condition");
        symbolSpan.classList.add("symbol");
        symbolSpan.textContent = returnSignIcon(arr);
        const conditionSpanHolder = document.createElement("span");
        conditionSpanHolder.classList.add("condition");
        for (let i = 0; i < 3; i++) {
            const spanElement = document.createElement("span");
            spanElement.classList.add("forecast-data");
            if (i === 0) {
                spanElement.textContent = arr[0];
                conditionSpanHolder.appendChild(spanElement);
            }
            else if (i === 1) {
                spanElement.textContent = `${arr[3]}°/${arr[2]}°`
                conditionSpanHolder.appendChild(spanElement);
            } else {
                spanElement.textContent = arr[1];
                conditionSpanHolder.appendChild(spanElement);
            }
        }
        forecastsDiv.appendChild(symbolSpan);
        forecastsDiv.appendChild(conditionSpanHolder);
        return forecastsDiv;
    }

    function returnSignIcon(arr){
        const weather = arr[1];
        switch (weather) {
            case "Sunny": return "☀";
            case "Partly sunny": return "⛅";
            case "Overcast": return "☁";
            case "Rain": return "☂";
        }
    }

    function returnSignIconFromArrOfObjects(arr, i){
        const weather = arr[i]["condition"];
        switch (weather) {
            case "Sunny": return "☀";
            case "Partly sunny": return "⛅";
            case "Overcast": return "☁";
            case "Rain": return "☂";
        }
    }

    function extractSingledayInfo(obj) {
        let infoArr = [];
        let values = Object.values(obj);
        let [condObj, name] = values;
        infoArr.push(name);
        for (const key in condObj) {
            infoArr.push(condObj[key]);
        }
        return infoArr;
    }
}

attachEvents();