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

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3000/5day/${latitude}/${longitude}`);
    xhr.send();

    xhr.onload = () => {
        const body = JSON.parse(xhr.responseText);
        console.log(body);
        for (let i = 0; i < forecastElements.length; i++) {
            forecastElements[i].innerHTML = body[i]["dayName"] + ": " + body[i]["temp"] + "\u00B0F";
        }
    };
});