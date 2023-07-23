const subHeader = document.getElementById("sub-head")
const input = document.getElementById("weight-input")
const calcBtn = document.getElementById("calculate-btn")
const sunResult = document.getElementById("sun-result")
const sunFun = document.getElementById("sun-fun")
const mercuryResult = document.getElementById("mercury-result")
const venusResult = document.getElementById("venus-result")
const earthResult = document.getElementById("earth-result")
const moonResult = document.getElementById("moon-result")
const marsResult = document.getElementById("mars-result")
const jupiterResult = document.getElementById("jupiter-result")
const saturnResult = document.getElementById("saturn-result")
const enceladusResult = document.getElementById("enceladus-result")
const uranusResult = document.getElementById("uranus-result")
const neptuneResult = document.getElementById("neptune-result")
const plutoResult = document.getElementById("pluto-result")
const lang = document.getElementsByTagName('html')[0].getAttribute("lang");
/*getting all the neccessary elements from the DOM (output fields for each celestial body, 
the input field, the button to trigger the functions, the sub header to display any errors
and finally the language tag)*/

const sunGrav = 27.01
const mercuryGrav = 0.38
const venusGrav = 0.91
const earthGrav = 1
const moonGrav = 0.166
const marsGrav = 0.38
const jupiterGrav = 2.34
const saturnGrav = 1.06
const enceladusGrav = 0.012
const uranusGrav = 0.92
const neptuneGrav = 1.19
const plutoGrav = 0.06
//storing the values of the gravity of each celestial body relative to earth's

let result = 0 //for use in the calculation function
let inputAsNum = input.valueAsNumber 
//because the input field gives its value as a string no matter what, we need to turn it into a number to check if it is one...




function clearResults() { //resets output fields and sub header to default
    sunResult.textContent = ""
    mercuryResult.textContent = ""
    venusResult.textContent = ""
    earthResult.textContent = ""
    moonResult.textContent = ""
    marsResult.textContent = ""
    jupiterResult.textContent = ""
    saturnResult.textContent = ""
    uranusResult.textContent = ""
    neptuneResult.textContent = ""
    plutoResult.textContent = ""
    subHeader.textContent = ""
    sunFun.textContent = ""
}

function calc(unit) { //calculating weight passing in the stored earth-relative gravity and giving the result with only 2 decimals
    result = input.value * unit;
    result = result.toFixed(2);
    return result;
}

function sunCalc() { //running the calculation with the suns gravity as the multiplier and putting the result in the suns output field
    calc(sunGrav)
    sunResult.textContent = `${result} kg`
    switch (lang) { //a switch for each language
        case "en":
            sunFun.textContent = "(If you didn't immediately evaporate upon attempting to land there)"
            break
        case "no":
            sunFun.textContent = "(Hvis du ikke hadde fordampet umiddelbart om du prøvde å lande der)"
            break
        case "jp":
            sunFun.textContent = "(着地の際、一瞬にして蒸発しなかったらな)"
            break
    }
}

function mercuryCalc() { //one function for each of the celestial bodies
    calc(mercuryGrav)
    mercuryResult.textContent = `${result} kg`
}

function venusCalc() {
    calc(venusGrav)
    venusResult.textContent = `${result} kg`
}


function earthCalc() {
    calc(earthGrav)
    earthResult.textContent = `${result} kg`
}


function moonCalc() {
    calc(moonGrav)
    moonResult.textContent = `${result} kg`
}

function marsCalc() {
    calc(marsGrav)
    marsResult.textContent = `${result} kg`
}

function jupiterCalc() {
    calc(jupiterGrav)
    jupiterResult.textContent = `${result} kg`
}

function saturnCalc() {
    calc(saturnGrav)
    saturnResult.textContent = `${result} kg`
}

function enceladusCalc() {
    calc(enceladusGrav)
    enceladusResult.textContent = `${result} kg`
}

function uranusCalc() {
    calc(uranusGrav)
    uranusResult.textContent = `${result} kg`
}

function neptuneCalc() {
    calc(neptuneGrav)
    neptuneResult.textContent = `${result} kg`
}

function plutoCalc() {
    calc(plutoGrav)
    plutoResult.textContent = `${result} kg`
}

calcBtn.addEventListener ("click", function() {
    if (typeof inputAsNum === "number" && input.value !== "" && input.value < 100001) { 
        /*if the input is a number, not an empty string (if the input isn't numbers inputAsNum will "fail" and the string
        from the input itself will remain as an empty string because the input field only "accepts" numbers anyway) 
        and said input is below 100001 (accepts up to and including 100000); run the clear function and all the calculation functions*/
        clearResults();
        sunCalc();
        mercuryCalc();
        venusCalc();
        earthCalc();
        moonCalc();
        marsCalc();
        jupiterCalc();
        saturnCalc();
        enceladusCalc();
        uranusCalc();
        neptuneCalc();
        plutoCalc();
    } else if (typeof inputAsNum === "number" && input.value !== "" && input.value > 100000) {
        /*if the input is a number, not an empty string, but over 100000(the highest number allowed in the first condition); 
        clear all output fields to avoid user possibly confusing the previouus result with being from their erroneous input
        and display an error asking for a lower number, this is an arbitrary limitation to avoid scientific notation in the results*/
        clearResults();
        switch (lang) { 
            case "en":
                subHeader.textContent = "Please give me a lower number"
                break
            case "no":
                subHeader.textContent = "Vennligst gi meg et lavere tall"
                break
            case "jp":
                subHeader.textContent = "もっと低い数字を下さい"
                break
        }
    } else {
        //if something else has gone wrong; display a generic error
        clearResults();
        switch (lang) {
            case "en":
                subHeader.textContent = "Please give me a number"
                break
            case "no":
                subHeader.textContent = "Vennligst gi meg et tall"
                break
            case "jp":
                subHeader.textContent = "数字を下さい"
                break
        }
    }
})