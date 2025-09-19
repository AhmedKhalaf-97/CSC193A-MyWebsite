// document.getElementById("biggerButton").addEventListener("click", () => {
//     alert("Hello, world!");
// })

function createAlert() {
    // alert("Hello, world!");
    document.getElementById("inputText").style.fontSize = '24pt';
}

function setTextStyle(stlyeType) {
    if (stlyeType === "fancy") {
        document.getElementById("inputText").style.fontWeight = "bold";
        document.getElementById("inputText").style.color = "blue";
        document.getElementById("inputText").style.textDecoration = "underline";
    }
    else {
        document.getElementById("inputText").style.fontWeight = "normal";
        document.getElementById("inputText").style.color = "black";
        document.getElementById("inputText").style.textDecoration = "";
    }
}

function mooText() {
    const textArea = document.getElementById("inputText");

    let textAreaStr = textArea.value;
    let sentences = textAreaStr.split(".");

    textAreaStr = sentences.join("-Moo");

    textArea.value = textAreaStr.toUpperCase();
}