let linkAPI = 'https://api.openweathermap.org/data/2.5/weather';
let keyAPI = 'cf49124c3a8b041bb5691398e12ee680';
let placeInput = document.querySelector('input');
let weatherImage = document.querySelector('#Weather-img');
let humid = document.querySelector('#humidity');
let windSpeed = document.querySelector('#speed');
let temp = document.querySelector('#temp');
let place = document.querySelector('#place');


async function getData(){

    if (!placeInput.value) {
        placeInput.value = 'New York';
    }

    const response = await fetch(linkAPI + '?q=' + placeInput.value + '&appid=' + keyAPI + '&units=metric');
    const data = response.json();
    return data;
}

function getWeatherData(){

    getData().then(result => 
        {
            
            let Weather = result.weather[0].main;
            let Wind = result.wind.speed;
            let Humidity = result.main.humidity;
            let country = result.name;
            let temperature = Math.round(result.main.temp);

            console.log(result);

            Weather = Weather.toLowerCase();

            if (Weather == 'clear') {
                weatherImage.src = 'images/clear.png';
            }
            else if(Weather == 'clouds'){
                weatherImage.src = 'images/clouds.png';
            }
            else if(Weather == 'drizzle'){
                weatherImage.src = 'images/drizzle.png';
            }
            else if(Weather == 'mist'){
                weatherImage.src = 'images/mist.png';
            }
            else if(Weather == 'snow'){
                weatherImage.src = 'images/snow.png';
            }
            else if(Weather == 'rain'){
                weatherImage.src = 'images/rain.png';
            }

            temp.textContent = temperature + '°C';
            place.textContent = country;
            windSpeed.textContent = Wind + ' km/h';
            humid.textContent = Humidity + '%'

        });
}