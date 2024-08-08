import { config } from "./config.js"; 

const key = config.API_KEY; 
let call = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Vancouver&aqi=no`; 

fetch(call, {mode: 'cors'}) 
.then(function(response) {
    return response.json(); 
})
.then(function(response) {
    console.log(response); 
})
.catch(function(error) {
    console.error("Error: ", error); 
}); 
