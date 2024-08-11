let index = 0;
const colors = ["red", "green", "blue", "violet", "yellow", "black", "white", "turquoise", "magenta", "gold", "pink", "cyan", "brown", "yellow"];
function changeColor() {
    // document.getElementsByTagName("body")[0].style.backgroundColor = colors[index++]
    document.body.style.backgroundColor = colors[index++];
    if (index >= colors.length) {
        index = 0;
    }
}