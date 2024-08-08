import { config } from "./config.js"; 

const key = config.API_KEY; 
let call = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Vancouver&aqi=no`; 

let location = ""; 
let region = ""; 
let country = ""; 
let weather = ""; 

function getInformation() {
    fetch(call, {mode: 'cors'}) 
    .then(function(response) {
        return response.json(); 
    })
    .then(function(response) { 
        location = response.location.name; 
        region = response.location.region; 
        country = response.location.country; 
        weather = response.current.condition.text; 

        console.log("Location:", location); 
        console.log("Region:", region); 
        console.log("Country:", country); 
        console.log("Weather:", weather); 
    })
    .catch(function(error) {
        console.error("Error: ", error); 
    }); 
}

