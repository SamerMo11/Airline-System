let fligthChosen = document.querySelector(".flight_chosen");
let result = document.querySelector(".flights");
let form = document.querySelector("form")
let button = document.querySelector("input[type=submit]")

const regExpDay = new RegExp(/\w+-\w+-\w+/);
const regExpTime = new RegExp(/\w+:\w+/);
const req = new XMLHttpRequest();
req.open("GET", "a.json");
req.send();

// Relaoding Section
// document.body.style.overflow = "hidden";
window.scrollTo(0 , 0)

// const relaod = setTimeout(() => {
//   document.querySelector(".reload").style.display = "none";
//   document.body.style.overflow = "auto";
// }, 1500);

console.log();
let data = JSON.parse(sessionStorage.getItem("flight"));
if (sessionStorage.getItem("flight")){
  console.log(data)
  document.getElementById("from").value = data["departureCity"];
  document.getElementById("to").value = data["arrivalCityDepartureLeg"];
  document.getElementById("check_in").value = data["departureTimeDepartureLeg"];
  document.getElementById("check_out").value = data["departureTimeReturnLeg"];
  document.getElementById("price").value =
    +data["standard_priceDepartureLeg"] + +data["standard_priceReturnLeg"];
    // --------------------------------------------------------------------------
  
    document.querySelector(".depCity").innerHTML = data["departureCity"];
  document.querySelector(".RetCity").innerHTML = data["arrivalCityDepartureLeg"];
  document.querySelector(".goDate").innerHTML = data["departureTimeDepartureLeg"];
  document.querySelector(".returnDate").innerHTML = data["departureTimeReturnLeg"];
  document.querySelector(".price").innerHTML =
    +data[`${window.localStorage.getItem("Class Type")}_priceDepartureLeg`] + +data[`${window.localStorage.getItem("Class Type")}_priceReturnLeg`];
  // standard_priceDepartureLeg
  
};