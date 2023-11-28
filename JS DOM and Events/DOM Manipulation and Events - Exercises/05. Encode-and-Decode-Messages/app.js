function encodeAndDecodeMessages() {
    let encodeAndSendBtn = document.querySelector("#main > div:first-child button");
    let decodeAndReadBtn = document.querySelector("#main > div:last-child button");


    // let inputTextarea = document.querySelector("textarea[placeholder^=Write");
    // let outputTextarea = document.querySelector("textarea[placeholder^=No");
    let [inputTextarea, outputTextarea] = Array.from(document.querySelectorAll("textarea"));

    encodeAndSendBtn.addEventListener("click", encode);
    decodeAndReadBtn.addEventListener("click", decode);


    function encode() {
        let message = inputTextarea.value;

        let encoded = [];
        for (let i = 0; i < message.length; i++) {
            let currSymbol = message.charCodeAt(i);
            encoded.push(String.fromCharCode(currSymbol + 1));
        }

        inputTextarea.value = "";
        outputTextarea.value = encoded.join("");
    }

    function decode(){
        let message = outputTextarea.value;

        let decoded = [];
        for (let i = 0; i < message.length; i++) {
            let currSymbol = message.charCodeAt(i);
            decoded.push(String.fromCharCode(currSymbol - 1));
        }

        outputTextarea.value = decoded.join("");
    }
}

