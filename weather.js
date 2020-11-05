const positionWeather = document.querySelector(".positionWeather");
const COORDS = "coords";
const API_KEY = "0447da692cbea035a1448e596d3213f5";

function weather(lat,lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const temp = json.main.temp;
    const place = json.name;
    positionWeather.innerText = `${temp}°C  at ${place}`;
  });
}

function saveCoords(positionObj){
  localStorage.setItem(COORDS,JSON.stringify(positionObj));
}

function errorCallback(){
  console.log("Can not access your position. if you want to know your position, Please refesh site again and allow your position.");
}

function successCallback(GeolocationPosition){
  const latitude = GeolocationPosition.coords.latitude;
  const longitude = GeolocationPosition.coords.longitude;
  const positionObj = {
    latitude: latitude,
    longitude: longitude
  };
  saveCoords(positionObj);
  weather(positionObj.latitude,positionObj.longitude);
}

function askCoods(){
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

function init(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null ){
    askCoods();
  }
  else{
    const parseCoords = JSON.parse(loadedCoords);
    weather(parseCoords.latitude,parseCoords.longitude);
  }
}
init();