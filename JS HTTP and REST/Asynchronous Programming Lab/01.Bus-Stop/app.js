async function getInfo() {
    const infoUl = document.querySelector("#buses");
    const stopNameDiv = document.querySelector("#stopName");
    const infoDiv = document.querySelector("#stopInfo");
    let busId = document.querySelector("#stopId").value;
    
    infoUl.innerHTML = "";
    let busInfo;

    try {
        let info = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${busId}`);
        busInfo = await info.json();
        displayInfo(busInfo, stopNameDiv, infoUl);
    } catch (error) {
        stopName.textContent = "Error";
    }


}

function displayInfo(obj, nameDisplayDiv, timeDisplayUl){
    nameDisplayDiv.textContent = obj.name;

    Object.entries(obj.buses).map(([number, arrivalTime]) =>{
    
        let li = document.createElement("li");
        li.textContent = `Bus ${number} arrives in ${arrivalTime} minutes`;
        timeDisplayUl.appendChild(li);
    });
}

