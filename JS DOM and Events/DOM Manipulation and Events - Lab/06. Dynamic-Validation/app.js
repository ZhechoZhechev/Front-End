function validate() {
    let input = document.querySelector("#email");

    input.addEventListener("change", function checkEmail() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        let result = emailRegex.test(input.value);

        result === false ? input.classList.add("error")
            : input.classList.remove("error");
    })
}