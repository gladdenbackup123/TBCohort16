//https://api.openweathermap.org/data/2.5/weather?q={mumbai}&appid={5bf4a609216928465bcb5a9ec6621dff}

let btn = document.getElementById('weather-button');
btn.addEventListener('click',getWeather);

async function getWeather(){
    const cityInput = document.getElementById('input-city');
    const cityName = cityInput.value;
    //console.log(cityName);
    const apiKey = '5bf4a609216928465bcb5a9ec6621dff';

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    try{
        let response = await fetch(apiURL);
        //console.log(response);
        if(response.ok){
            let weatherData = await response.json();
            //console.log(weatherData);
            displayWeather(weatherData);
        }
        else{
            alert("Error fetching weather , request failed!");
            throw new Error('Request has failed');
        }
    }
    catch(error){
        console.error("Couldn't fetch data :",error);
    }
    
}

function displayWeather(weatherData){
    let city = document.getElementById('city');
    city.innerHTML = 'City : ' + weatherData.name;
    let temp = document.getElementById('temperature');
    temp.innerHTML = 'Temperature : ' + Math.round(weatherData.main.temp-273) + '°C';
    let feelsLike = document.getElementById('feels-like');
    feelsLike.innerHTML = 'Feels Like : '+ Math.round(weatherData.main.feels_like-273) + '°C';
    let humidity = document.getElementById('humidity');
    humidity.innerHTML = 'Humidity : ' + weatherData.main.humidity + '%';
}