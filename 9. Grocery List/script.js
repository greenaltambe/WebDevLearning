const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems")
const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function () {
    allItems.innerHTML = "";
});

userInput.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addItem();
    }
});

function addItem() {
    let item = document.createElement("h2");
    item.innerHTML = "- " + userInput.value;

    item.addEventListener("click", function () {
        item.style.textDecoration = "line-through";
    })
    
    allItems.insertAdjacentElement("beforeend", item); // Inserts item at the end of all items div box

    userInput.value = "";
}