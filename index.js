// require('dotenv').config();

const emojis = {
  "01d": "☀️",
  "02d": "⛅️",
  "03d": "☁️",
  "04d": "☁️",
  "09d": "🌧",
  "10d": "🌦",
  "11d": "⛈",
  "13d": "❄️",
  "50d": "💨",
  "01n": "☀️",
  "02n": "⛅️",
  "03n": "☁️",
  "04n": "☁️",
  "09n": "🌧",
  "10n": "🌦",
  "11n": "⛈",
  "13n": "❄️",
  "50n": "💨",
};

const htmlCard = (cityName, weatherEmoji, temp, feelsLike) => { 
  const html = `
  <div class="container d-flex justify-content-center">
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-body">
         <h4>${`Weather in ${cityName} is ${weatherEmoji}`}</h4>
         <h5>${`${temp} degree`}</h5>
         <p>${`feels like: ${feelsLike} degree`}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;
  return html;
};

//select everything needed
const card = document.querySelector('.card-body');
const button = document.querySelector('.btn');
const weatherCard = document.querySelector('.weatherCard')

button.addEventListener('click', async (event) => {
  event.preventDefault()
  let inputCity = document.querySelector('input').value.toLowerCase();
  // console.log(city);
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=d1f683e5ef0e53192c200bcb85773a55`);
  const data = await response.json();
  const cityName = data.name;
  console.log(data);
  const weatherEmoji = emojis[data.weather[0].icon];
  const temp = Math.round(data.main.temp -273.15);
  const feelsLike = Math.round(data.main.feels_like -273.15); 
  weatherCard.innerHTML = htmlCard(cityName, weatherEmoji, temp, feelsLike) ;
  // console.log(data)
})
  