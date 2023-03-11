var beans = 0;
var amountPerClick = 1;
var beansPerSecond = 0;
var buildings = {
    farm: {
        name: "Farm", cost: 75, bPS: 1, count: 0,
        buy: function() {
            buildings.farm.count += 1;
            buildings.farm.cost += buildings.farm.cost * 0.15;
            beansPerSecond += buildings.farm.bPS;
        }
    }
}
function clickbean() {
    beans += amountPerClick;
    document.getElementById("beans").innerText = beans.toString();
}
function update() {
    beans += beansPerSecond;
}
setInterval(update, 1000);