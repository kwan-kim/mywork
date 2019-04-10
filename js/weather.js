const API_KEY = '5595007db5d1f9a204acca76652ce2fa';
const COORDS = 'coords';
const TEMPERATURE = document.querySelector('.temp')
const CITY = document.querySelector('.city')
function getWeather(latitude, longitude){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  )
  .then((res) => {
    return res.json();
  })
  .then((data) =>{
    var currentTemperature = Math.floor(data.main.temp)
    TEMPERATURE.innerText = `${currentTemperature}°`
    CITY.innerText = `${data.name}`
  })
}

function setCoords(coordsObj){
  sessionStorage.setItem(COORDS , JSON.stringify(coordsObj))
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude : latitude,
    longitude : longitude
  }
  setCoords(coordsObj)
  getWeather(latitude ,longitude)
}

function handleGeoFail(){
  console.log('fail location set')
}

function getCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces , handleGeoFail)
}

function loadCoords(){
  const loadedCoords = sessionStorage.getItem(COORDS)
  if(!loadedCoords){
    getCoords()
  }else{
    const currentCoords = JSON.parse(loadedCoords)
    getWeather(currentCoords.latitude, currentCoords.longitude)
  }
}

function init(){
  loadCoords()
}

init()