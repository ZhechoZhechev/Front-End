function solve() {
    const departButton = document.querySelector("#depart");
    const arriveButton = document.querySelector("#arrive");
    const busInfoBox = document.querySelector("#info .info");

    let routeInfo = {
        name: "",
        next: "depot"
    }

    async function depart() {
        let body;

        try {
            let info = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${routeInfo.next}`);
            body = await info.json();
            
        } catch (error) {
            updateStopInfo(true, true, `Error`);
        }

        routeInfo = body;

        updateStopInfo(true, false, `Next stop ${routeInfo.name}`);
    }

    async function arrive() {
        updateStopInfo(false, true, `Arriving at ${routeInfo.name}`);
    }

    return {
        depart,
        arrive
    };

    function updateStopInfo(departButtonState, arriveButtonState, textContent) {
        departButton.disabled = departButtonState;
        arriveButton.disabled = arriveButtonState;
        busInfoBox.textContent = textContent;
    }
}

let result = solve();
