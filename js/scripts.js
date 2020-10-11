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
    var margherita = 0;
    var addMargherita = document.getElementById("toppingone");
    if (addMargherita.checked === true) {
        margherita = 1000;
    }
    return parseInt(margherita);
}

function sausage() {
    var sausage = 0;
    var addsausage = document.getElementById("toppingone");
    if (addsausage.checked === true) {
        sausage = 1000;
    }
    return parseInt(sausage);
}
function meat() {
    var meat = 0;
    var addmeat = document.getElementById("toppingone");
    if (addmeat.checked === true) {
        meat = 1000;
    }
    return parseInt(meat);
}
function neapolitan() {
    var neopolitan = 0;
    var addneopolitan = document.getElementById("toppingone");
    if (addneopolotan.checked === true) {
        neopolitan= 1000;
    }
    return parseInt(neopolitan);
}
function mozarellaCheese() {
    var cheese = 0;
    var addmozarellaCheese = document.getElementById("toppingone");
    if (addmozarellaCheese.checked === true) {
        cheese = 1000;
    }
    return parseInt(cheese);
}

function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + margherita()) * (getNumber());
    
        console.log(totalPrice);
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}







$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Dear " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.delivery fee/1500rwf/= Thank you .");
         
    });
    
});