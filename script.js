var beans = 0;
var amountPerClick = 1;
var beansPerSecond = 0;
var buildings = {
    farm: {
        name: "Farm", cost: 75, bPS: 1, count: 0,
        buy: function() {
            if (beans < this.cost) return;
            beans -= this.cost;
            document.getElementById("beans").innerText = beans;
            this.count += 1;
            this.cost += Math.floor(this.cost * 0.15);
            document.getElementById("farmcost").innerText = buildings.farm.cost;
            beansPerSecond += this.bPS;
        }
    }
}
document.getElementById("farmcost").innerText = buildings.farm.cost;
function clickbean() {
    beans += amountPerClick;
    document.getElementById("beans").innerText = beans;
}
function update() {
    beans += beansPerSecond;
    document.getElementById("beans").innerText = beans;
}
setInterval(update, 1000);