const messageInput = document.getElementById("message-input");


// When key (enter) is clicked, call getMessage()
messageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getMessage();
    }
})
function getMessage() {
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";
}