function attachEventsListeners() {
    let convertBtn = document.querySelector("#convert");

    const unitsToMeters = {
        km: (value) => value * 1000,
        m: (value) => value,
        cm: (value) => value * 0.01,
        mm: (value) => value * 0.001,
        mi: (value) => value * 1609.34,
        yrd: (value) => value * 0.9144,
        ft: (value) => value * 0.3048,
        in: (value) => value * 0.0254
    }

    const metersToUnits = {
        km: (value) => value / 1000,
        m: (value) => value,
        cm: (value) => value / 0.01,
        mm: (value) => value / 0.001,
        mi: (value) => value / 1609.34,
        yrd: (value) => value / 0.9144,
        ft: (value) => value / 0.3048,
        in: (value) => value / 0.0254,
    }

    convertBtn.addEventListener("click", convert);

    function convert(){
        let value = document.querySelector("#inputDistance").value;
        let fromValue = document.querySelector("#inputUnits").value;
        let toValue = document.querySelector("#outputUnits").value;
        let outputBox = document.querySelector("#outputDistance");

        let toMeters = unitsToMeters[fromValue](Number(value));
        let finalValue = metersToUnits[toValue](Number(toMeters));
        outputBox.value = finalValue;
    }
}