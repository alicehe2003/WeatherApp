import { config } from "./config.js"; 

const key = config.API_KEY; 

let location = ""; 
let region = ""; 
let country = ""; 
let weather = ""; 
let feelslike = ""; 

export function getInformation(event) {
    event.preventDefault(); 

    // get city from input 
    const city = document.getElementById("city").value; 
    const call = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`; 


    fetch(call, {mode: 'cors'}) 
    .then(function(response) {
        return response.json(); 
    })
    .then(function(response) { 
        location = response.location.name; 
        region = response.location.region; 
        country = response.location.country; 
        weather = response.current.condition.text; 
        feelslike = response.current.feelslike_c; 

        console.log("Location:", location); 
        console.log("Region:", region); 
        console.log("Country:", country); 
        console.log("Weather:", weather); 
        console.log("Feels like:", feelslike); 

        setResponse(); 
    })
    .catch(function(error) {
        console.error("Error: ", error); 
    }); 
}

window.getInformation = getInformation; 

function setResponse() {
    const region_info = "Weather in " + location + ", " + region + ", " + country + ": "; 
    const weather_info = "Currently " + weather + ", feels like " + feelslike + ". "; 

    document.querySelector(".region_display").innerText = region_info; 
    document.querySelector(".weather_display").innerText = weather_info; 
}
