/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/
const body = document.querySelector("body")
const input = document.getElementById("num-input")
const button = document.getElementById("convert-btn")
const length = document.getElementById("length-convert")
const volume = document.getElementById("volume-convert")
const mass = document.getElementById("mass-convert")
const modeBtn = document.getElementById("mode")
const metricContainer = document.getElementsByClassName("metric-light")
const metricHeader = document.getElementsByClassName("metric-header")

console.log(metricHeader)

modeBtn.addEventListener("click", function() {
    if (body.classList.contains("light-mode")) {
        modeBtn.innerText = "☀️"
        body.classList.remove("light-mode")
        body.classList.add("dark-mode")
    } else {
        body.classList.remove("dark-mode")
        body.classList.add("light-mode")
        modeBtn.innerText = "🌙"
    }
})

button.addEventListener("click", function(e) {
    e.preventDefault()
    const digit = input.value
    input.value = ""
    
    const convertMeter = (digit * 3.28084).toFixed(3)
    const convertFeet = (digit / 3.28084).toFixed(3)
    const convertLiter = (digit * 0.264172).toFixed(3)
    const convertGallon = (digit / 0.264172).toFixed(3)
    const convertKilo = (digit * 2.20462).toFixed(3)
    const convertPound = (digit / 2.20462).toFixed(3)

    length.innerText = `${digit} meters = ${convertMeter} feet | ${digit} feet = ${convertFeet} meters`
    volume.innerText = `${digit} liters = ${convertLiter} gallons | ${digit} gallons = ${convertGallon} liters`
    mass.innerText = `${digit} kilograms = ${convertKilo} pounds | ${digit} pounds = ${convertPound} kilograms`
})

