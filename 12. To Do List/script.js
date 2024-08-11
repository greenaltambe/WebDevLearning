const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});

function addItem() {
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    let iconDiv = document.createElement("div");
    let checkIcon = document.createElement("i");
    let trashIcon = document.createElement("i");

    divParent.className = "item";
    divChild.innerHTML = "<div>" + input.value + "</div>";

    checkIcon.className = "fas fa-check-square";
    checkIcon.addEventListener("click", function () {
        checkIcon.style.color = "limegreen";
    });
    iconDiv.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function () {
        divParent.remove();
    });
    iconDiv.appendChild(trashIcon);
    divParent.appendChild(divChild);
    divParent.appendChild(iconDiv);
    toDoItems.appendChild(divParent);

    input.value = "";
}