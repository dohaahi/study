const city = document.querySelector('#weather span:first-child');
const weather = document.querySelector('#weather span:last-child');
const API_KEY = "0683fb8c71b3e378f3bd53d9b0b00065";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    })
}

function onGeoError() {
  console.log("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
