setInterval(function() {
let losElement = document.querySelector("#los");
let losDateElement = losElement.querySelector(".date");
let losTimeElement = losElement.querySelector(".time");
let losTime = moment().tz("America/Los_Angeles");
losDateElement.innerHTML = losTime.format("MMMM Do YYYY");
losTimeElement.innerHTML = `${losTime.format("h[:]mm[:]ss")} <small>${losTime.format("A")}</small>`;
}, 1000);
setInterval(function () {
  let parElement = document.querySelector("#par");
  let parDateElement = parElement.querySelector(".date");
  let parTimeElement = parElement.querySelector(".time");
  let parTime = moment().tz("Europe/Paris");
  parDateElement.innerHTML = parTime.format("MMMM Do YYYY");
  parTimeElement.innerHTML = `${parTime.format(
    "h[:]mm[:]ss"
  )} <small>${parTime.format("A")}</small>`;
}, 1000);
function cityChange(event) {
    let cityTz = event.target.value;
    let cityName = cityTz.replace('_', ' ').split("/")[1];
    let cityTime = moment().tz(cityTz);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = ` <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h[:]mm[:]ss"
        )}<small>${cityTime.format("A")}</small></div>`;
}
let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", cityChange);