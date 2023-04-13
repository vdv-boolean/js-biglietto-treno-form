// Recive information like name of passenger, his age and distance of journey

const passengerName = document.querySelector('#passengerName');
const journeyDistance = document.querySelector('#journeyDistance');
const passengerAge = document.querySelector('#passengerAge')

const btn = document.querySelector("button"); 
btn.addEventListener('click', function () {
    console.log("Passenger name: " + passengerName.value + ", Journey distance: " + journeyDistance.value + ", Passenger age: " + passengerAge.value) ;

});


/*
// Input validator
if (isNaN(trainDistance)) {
    // console.log("Hai inserito un valore errato nella distanza. Aggiorna la pagina e riprova");
    alert("Hai inserito un valore errato nella distanza. Aggiorna la pagina e riprova")
} else {

}

if (isNaN(userAge)) {
    // console.log("Hai inserito una età non valida. Aggiorna la pagina e riprova");
    alert("Hai inserito una età non valida. Aggiorna la pagina e riprova")
} else {
    
}

// Get ticket price (0.21 €/km)
const ticketPrice = trainDistance * 0.21;

// console.log("Ticket price: " + ticketPrice);

document.getElementById("ticketPrice").innerHTML = (Math.round(ticketPrice * 100) / 100).toFixed(2) + " €";

// Get ticket sale (-20% for minors and -40% for over 65)
let ticketSale = 0;

if (userAge = 18) {
    ticketSale = ticketPrice / 5;
    // console.log("Sale: -20% off. Savings: " + ticketSale);
    document.getElementById("sale").innerHTML = "- 20%";
}

else if (userAge >= 65) {
    ticketSale = ticketPrice / 2.5;
    // console.log("Sale: -40% off. Savings: " + ticketSale);
    document.getElementById("sale").innerHTML = "- 40%";
}

else  {
    // console.log("Sale: none");
    document.getElementById("sale").innerHTML = "Nessuno";
}

document.getElementById("ticketSale").innerHTML = (Math.round(ticketSale * 100) / 100).toFixed(2) + " €";

// Get final ticket price
let finalPrice = ticketPrice - ticketSale;

// console.log("Final price: " + finalPrice);

document.getElementById("finalPrice").innerHTML = (Math.round(finalPrice * 100) / 100).toFixed(2) + " €";

*/