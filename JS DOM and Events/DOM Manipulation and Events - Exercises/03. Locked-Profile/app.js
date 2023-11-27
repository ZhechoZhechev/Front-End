function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(button => button.addEventListener("click", handleClick));

    function handleClick(e){
        let radioBtn = e.currentTarget.parentElement.querySelector("input[type=radio]");

        if (radioBtn.checked) {
            return;
        }

        let infoDiv = e.currentTarget.parentElement.querySelector("div");
        let isHidden = e.currentTarget.textContent === "Show more"

        infoDiv.style.display = isHidden ? "block" : "none";
        e.currentTarget.textContent = isHidden ? "Hide it" : "Show more";
    }
}