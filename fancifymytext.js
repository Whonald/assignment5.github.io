function showAlert() {
    alert("Hello, world!");
}

function makeTextBigger() {
    const textarea = document.getElementById("text");
    textarea.style.fontSize = "24pt";
}

function makeTextMoo() {
    const textarea = document.getElementById("text");
    textarea.value = textarea.value.toUpperCase();
    const sentences = textarea.value.split(".");
    const lastSentence = sentences[sentences.length - 2];

    if(lastSentence) {
        const words = lastSentence.split(" ");
        words[words.length - 1] = "-Moo";
        sentences[sentences.length - 1] = words.join(" ");
        textarea.value = sentences.join(".");

    }

}

function setStyles() {
    const textarea = document.getElementById("text");
    const fancyRadio = document.getElementById("fancy-radio");
    const boringRadio = document.getElementById("boring-radio");

    if(fancyRadio.checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
    }
    else if (boringRadio.checked) {
        textarea.style.fontWeight = "";
        textarea.style.color = "";
        textarea.style.textDecoration = "";
    }
}
