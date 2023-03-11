var beans = 0;
var amountPerClick = 1;
var beansPerSecond = 0;
var buildings = {
    farm: {
        name: "Farm", cost: 75, bPS: 1, count: 0,
        buy: function() {
            if (!beans < this.cost) return;
            beans -= this.cost;
            this.count += 1;
            this.cost += this.cost * 0.15;
            document.getElementById("farmcost").innerHTML = buildings.farm.cost;
            beansPerSecond += this.bPS;
        }
    }
}
function clickbean() {
    beans += amountPerClick;
    document.getElementById("beans").innerText = beans.toString();
}
function update() {
    beans += beansPerSecond / 10;
    document.getElementById("beans").innerText = beans.toString();
}
document.getElementById("farmcost").innerHTML = buildings.farm.cost;
setInterval(update, 100);