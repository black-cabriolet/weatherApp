const apiKey = "69798c7350c795ac72e0255910bc85b9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.getElementById("search");
const searchBtn  =  document.getElementById("searchIcon");
const weatherIcon = document.getElementById("icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404) {
        document.getElementById("error").style.display = "block";
        document.getElementById("weather").style.display = "none";
    }else{
        document.getElementById("error").style.display = "none";
        var data = await response.json();

        console.log(data);
        document.getElementById('name').innerText = data.name;
        document.getElementById('digits').innerText=Math.round(data.main.temp)+"°C";
        document.getElementById('exp').innerText=data.main.humidity+"%";
        document.getElementById('exp2').innerText=data.wind.speed+"km/hr";
        document.getElementById('lat').innerText=data.coord.lat;
        document.getElementById('long').innerText=data.coord.lon;
        document.getElementById('exp1').innerText=data.main.pressure+"hPa";

        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }else {
            weatherIcon.src == images/shadow.jpeg;
        }
        document.getElementById('weather').style.display="block";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})

