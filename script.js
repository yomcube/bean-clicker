var beans = document.getElementById("beans").innerText;
var amountToYield = 1;
function click() {
    var a = parseInt(beans) + amountToYield;
    beans = a.toString();
}