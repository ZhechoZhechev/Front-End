function toggle() {
    let div = document.querySelector("#extra");
    let button = document.querySelector(".button");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
        button.textContent = "Less";
    } else {
        div.style.display = "none";
        button.textContent = "More";
    }
}