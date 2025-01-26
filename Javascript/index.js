setInterval(function() {
let losElement = document.querySelector("#los");
let losDateElement = losElement.querySelector(".date");
let losTimeElement = losElement.querySelector(".time");
let losTime = moment().tz("America/Los_Angeles");
losDateElement.innerHTML = losTime.format("MMMM Do YYYY");
losTimeElement.innerHTML = `${losTime.format("h[:]mm[:]ss")} <small>${losTime.format("A")}</small>`;
}, 1000);