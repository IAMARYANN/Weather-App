const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey="b39d6b970545a291eb5c7d8aaa2782e5";

const SearchBox=document.querySelector(".search input");
const SearchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      // Check if the response is valid
      if (!response.ok) {
        if (response.status === 404) {
            alert("City not found. Please enter a valid city name.");
        } else {
            alert("Failed to fetch weather data. Please try again later.");
        }
        return; // Stop further execution if the response is invalid
    }
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +" %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizle"){
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

SearchBtn.addEventListener('click',()=>{checkWeather(SearchBox.value);})