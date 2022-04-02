// assign a function to varible window - window already exists
window.onload = function load(){
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");

    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id ="message-box"

    speechBubbleElement.appendChild(messageBox);

    let nameBox = document.createElement("p");
    nameBox.id="name-box"

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
};

function showMessage(){
    let message = document.getElementById("message-text").value;
    let message2 = document.getElementById("name-text").value;
    let fullmessage= message + "-" + message2
    let messageBox = document.getElementById("message-box");
    messageBox.innerText = fullmessage;
}





