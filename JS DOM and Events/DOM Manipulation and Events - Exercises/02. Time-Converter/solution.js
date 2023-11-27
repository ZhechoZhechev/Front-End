function attachEventsListeners() {
    let daysBtn = document.querySelector("#daysBtn");
    let hoursBtn = document.querySelector("#hoursBtn");
    let minutesBtn = document.querySelector("#minutesBtn");
    let secondsBtn = document.querySelector("#secondsBtn");

    let daysInput = document.querySelector("#days");
    let hoursInput = document.querySelector("#hours");
    let minutesInput = document.querySelector("#minutes");
    let secondsInput = document.querySelector("#seconds");

    daysBtn.addEventListener("click", function convertDays(){
        let days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;
    })

    hoursBtn.addEventListener("click", function convertHours(){
        let hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 3600;
    })

    minutesBtn.addEventListener("click", function convertMinutes(){
        let minutes = minutesInput.value;
        daysInput.value = minutes / 1440;
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    })

    secondsBtn.addEventListener("click", function convertSeconds(){
        let seconds = secondsInput.value;
        daysInput.value = seconds / 86400;
        hoursInput.value = seconds / 3600;
        minutesInput.value = seconds / 60;
    })
}