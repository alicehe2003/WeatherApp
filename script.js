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
    })
    .catch(function(error) {
        console.error("Error: ", error); 
    }); 
}

window.getInformation = getInformation; 

