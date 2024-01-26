document.querySelector(".inner-switch").addEventListener("click", function () {
    var body = document.querySelector("body");
    var innerSwitch = document.querySelector(".inner-switch");

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        innerSwitch.textContent = "OFF";
    } else {
        body.classList.add("dark");
        innerSwitch.textContent = "ON";
    }
});



// ---------------


const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
        this.classList.toggle("is-open");

        let content = this.nextElementSibling;
        console.log(content);

        if (content.style.maxHeight) {
            //this is if the accordion is open
            content.style.maxHeight = null;
        } else {
            //if the accordion is currently closed
            content.style.maxHeight = content.scrollHeight + "px";
            console.log(content.style.maxHeight);
        }
    };
});


// --------------


const copyButton = document.querySelector(".copy-button");
const copyText = document.querySelector(".copy-text");
const clearButton = document.querySelector(".clear-button");
const textarea = document.querySelector(".testTextArea");

copyButton.addEventListener("click", () => {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyButton.classList.toggle("success");
    copyButton.innerHTML = "Copied!";

    setTimeout(function () {
        copyButton.classList.toggle("success");
        copyButton.innerHTML = "Copy";
    }, 2000);
});


clearButton.addEventListener("click", () => {
    clearButton.classList.toggle("failed");
    clearButton.innerHTML = "Cleared!";

    setTimeout(function () {
        clearButton.classList.toggle("failed");
    }, 2000);
});

clearButton.addEventListener("click", () => {
    textarea.value = "";
    copyText.value = "";
});