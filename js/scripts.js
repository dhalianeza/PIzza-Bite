


function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}

function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("numberofpizza").value;
    return parseInt(selectedNumber);
}
function margherita() {
    var Margherita = 0;
    var addMargherita = document.getElementById("toppingone");
    if (addMargherita.checked === true) {
        margherita= 1000;
    }
    return parseInt(margherita);
}

function sausage() {
    var sausage = 0;
    var addsausage = document.getElementById("toppingone");
    if (addsausage.checked === true) {
        sausage = 990;
    }
    return parseInt(sausage);
}
function meat() {
    var meat = 0;
    var addonions = document.getElementById("toppingone");
    if (addMargherita.checked === true) {
        meat = 980;
    }
    return parseInt(meat);
}
function neapolitan() {
    var neapolitan = 0;
    var addneapolitan = document.getElementById("toppingone");
    if (addneapolitan.checked === true) {
        neapolitan = 970;
    }
    return parseInt(neapolitan);
}
function mozarellaCheese() {
    var cheese = 0;
    var addmozarellaCheese = document.getElementById("toppingone");
    if (addmozarellaCheese.checked === true) {
        cheese = 960;
    }
    return parseInt(cheese);
}

function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + (margherita)) * (getNumber());
    
        console.log(totalPrice);
    alert("Your order of " + getNumber() + " will be delivered in 15minutes.Your total amount payable is " + totalPrice +"." )

}



