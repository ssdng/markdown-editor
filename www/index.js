import * as wasm from "markdown-editor";

// wasm.greet();

let editor = document.getElementById("editor");
let textbox = document.getElementById("textbox");

textbox.addEventListener("input", event => {
    console.log(event);
    let viewer = document.getElementById("viewer");
    let parsed = wasm.parse_markdown(textbox.value);
    viewer.innerHTML = parsed;
    sessionStorage.setItem("raw-data", textbox.value);    
});

textbox.value = sessionStorage.getItem("raw-data");
textbox.dispatchEvent(new Event("input"));


textbox.addEventListener("keydown", event => {
    if (event.keyCode != 9) {
        return;
    }

    event.preventDefault();

    let cursorPosition = textbox.selectionStart;
    let cursorLeft = textbox.value.substr( 0, cursorPosition );
    let cursorRight = textbox.value.substr( cursorPosition, textbox.value.length );
    textbox.value = cursorLeft + "\t" + cursorRight;
    textbox.selectionEnd = cursorPosition+1;
});


