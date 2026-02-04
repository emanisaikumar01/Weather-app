const apiKey = "API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");

async function checkWeather(cityName){

    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    temp.innerHTML = Math.round(data.main.temp) + "°C";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
searchBox.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        checkWeather(searchBox.value);
    }
});


async function checkWeather(cityName){

    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    
    if(response.status == 401){
        alert("Invalid API Key");
        return;
    }

    const data = await response.json();

    if(data.cod == "404"){
        alert("City Not Found");
        return;
    }

    temp.innerHTML = Math.round(data.main.temp) + "°C";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
}
console.log(data);
