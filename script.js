var beans = 0;
var amount = 1;
function clickbean() {
    beans += amount;
    document.getElementById("beans").innerText = beans.toString();
}