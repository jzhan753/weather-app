let latitude = 0;
let longitude = 0;

window.onload = function () {
    const date = new Date();
    const dateString = date.toLocaleString();
    let dateElement = document.getElementById('date');
    dateElement.textContent = dateString;

    // Geolocation stuff
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(success);
    } else {
        console.log('Geolocation is not available in your browser.');
    }
}

function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log('Latitude: ' + latitude);
    console.log('Longitude: ' + longitude);
}

const btn = document.getElementById('getWeatherBtn');

btn.addEventListener("click", () => {
    let forecast = [["M", -462], ["Tu", -462], ["W", -462], ["Th", -462], ["F", -462]];
    let forecastElements = document.getElementsByClassName("forecast");
    console.assert(forecast.length === forecastElements.length);
    for (let i = 0; i < forecast.length; i++) {
        forecastElements[i].innerHTML = forecast[i][0] + ": " + forecast[i][1] + "\u00B0F";
    }
});