function changeColor() {

    let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    let generatedHex = "#";

    for (let i = 0; i<6; i++) {
        generatedHex += hex[Math.floor(Math.random() * hex.length)];
    }

    document.getElementById("hex-code").innerHTML = generatedHex;
    document.getElementsByTagName("body")[0].style.backgroundColor = generatedHex;
}