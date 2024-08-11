let count = 0;

function changeCount(num) {
    count = count + num;
    document.getElementById("count").innerHTML = count;
}