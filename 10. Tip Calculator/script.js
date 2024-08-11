const amount = document.getElementById("amount")
const guest = document.getElementById("guest")
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");


// function calculate() {} is equivalent to below
calculate = () => {
    const tip = ((amount.value * quality.value) / guest.value).toFixed(2); // toFixed gives 2 decimal
    amount.value = "";
    guest.value = "";
    quality.value = "";

    if (tip === "NaN") {
        tipAmount.innerHTML = "Tip $0 each";
        showTipAmount();
    } else {
        tipAmount.innerHTML = "Tip $" + tip + " each";
        showTipAmount();
    }
}

showTipAmount = () => {
    let x = tipAmount;
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}