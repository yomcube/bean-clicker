var beans = 0;
var amountToYield = 1;
function clickbean() {
    beans += amountToYield;
    document.getElementById("beans").innerText = beans.toString();
}