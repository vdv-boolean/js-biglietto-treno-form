// Recive information like name of passenger, his age and distance of journey

const passengerName = document.querySelector('#passengerName');
const journeyDistance = document.querySelector('#journeyDistance');
const passengerAge = document.querySelector('#passengerAge');

// Get Ticket price
const ratePerKM = 0.21;
let ticketPrice = 0;




let passengerNameShow = document.querySelector('#passengerNameShow');
let ticketPriceShow = document.querySelector('#ticketPriceShow')




const btn = document.querySelector("button"); 
btn.addEventListener('click', function () {
    
    passengerNameShow.innerHTML = passengerName.value;
    let ticketSale = 0;
    let ticketPriceFinal = 0;
    ticketPrice = journeyDistance.value * ratePerKM;
    if (passengerAge.value < 18) {
        ticketSale = ticketPrice / 5;
        ticketPriceFinal = ticketPrice - ticketSale;
        ticketPriceShow.innerHTML = ticketPriceFinal + " €";
        saleShow.innerHTML = "Sconto minorenni";
    }
    
    else if (passengerAge.value >= 65) {
        ticketSale = ticketPrice / 2.5;
        ticketPriceFinal = ticketPrice - ticketSale;
        ticketPriceShow.innerHTML = ticketPriceFinal + " €";
        saleShow.innerHTML = "Sconto Over 65";
    }
    
    else  {
        ticketPriceFinal = ticketPrice - ticketSale;
        ticketPriceShow.innerHTML = ticketPriceFinal + " €";
        saleShow.innerHTML = "Tariffa base";
    }

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



document.getElementById("ticketSale").innerHTML = (Math.round(ticketSale * 100) / 100).toFixed(2) + " €";

// Get final ticket price
let finalPrice = ticketPrice - ticketSale;

// console.log("Final price: " + finalPrice);

document.getElementById("finalPrice").innerHTML = (Math.round(finalPrice * 100) / 100).toFixed(2) + " €";

*/