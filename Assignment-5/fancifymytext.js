(function () {
    "use strict";

    window.addEventListener("load", init);

    function init() {
        document.getElementById("biggerButton").addEventListener("click", () => {
            increaseFontSize();
        });

        document.getElementById("mooButton").addEventListener("click", () => {
            mooText();
        });

        document.getElementById("fancyRadioBtn").addEventListener("change", () => {
            setTextStyle("fancy");
        });

        document.getElementById("boringRadioBtn").addEventListener("change", () => {
            setTextStyle("boring");
        });
    }

    function increaseFontSize() {
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
})();
