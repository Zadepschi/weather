const api = {
  endpoint: "https://api.openweathermap.org/data/2.5/",
  key: "de1678bc641627f195e701820d8850c3"
}
const input = document.querySelector("#input");
input.addEventListener("keydown", enter);

function enter(e) {

  if (e.keyCode === 13) {
      getInfo(input.value);
      input.value = "";
      
  }
}

async function getInfo(data) {
const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
const result = await res.json();
displayResult(result);
}

function displayResult(result) {
   
 let city = document.querySelector("#city");
 city.textContent = `${result.name}, ${result.sys.country}`;
 getBackgroundImage(result);
 getOurDate();

 let temperature = document.querySelector("#temperature");
 temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

 let feelsLike = document.querySelector("#feelsLike");
 feelsLike.innerHTML = `Feels like: ${Math.round(result.main.feels_like)}<span>°</span>`;

 let conditions = document.querySelector("#conditions");
 conditions.textContent = `${result.weather[0].description}`;

 let variation = document.querySelector("#variation");
 variation.innerHTML = `Min: ${Math.round(result.main.temp_min)}<span>°</span> Max: ${Math.round(result.main.temp_max)}<span>°</span>`;

}

function getOurDate(){
const myDate = new Date;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let day = days[myDate.getDay()];

let date = myDate.getDate();

let month = months[myDate.getMonth()];

let year = myDate.getFullYear();

let showDate = document.querySelector("#date");
showDate.textContent = `${day}` + " " + `${date}`  + " " +  `${month}`  + " " +  `${year}`;
}





function getBackgroundImage(result) {
  let conditions = `${result.weather[0].main}`;
  
  
   
  if (conditions === "Clear") {
    document.body.style.backgroundImage =
    "url('sunny.jpg')";
  }
   
    if (conditions === "Clouds") {
        document.body.style.backgroundImage =
    "url('cloudy.jpg')";
  }
   
   if (conditions === "Mist" || conditions === "Smoke" || conditions === "Haze" || conditions === "Dust" || conditions === "Fog" || conditions === "Sand" || conditions === "Ash" || conditions === "Squall" || conditions === "Tornado") {
    document.body.style.backgroundImage =
     "url('mist.jpg')";
   }
   
  if (conditions === "Snow") {
    document.body.style.backgroundImage =
    "url('snow.jpg')";
  }
   
  if (conditions === "Rain") {
    document.body.style.backgroundImage =
    "url('rain.jpeg')";
  }
   
  if (conditions === "Drizzle") {
    document.body.style.backgroundImage =
    "url('drizzly.jpg')";
  }

  if (conditions === "Thunderstorm") {
    document.body.style.backgroundImage =
    "url('thunderstorm.jpg')";
  }
  
   
  }