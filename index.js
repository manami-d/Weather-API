// require('dotenv').config();

const card = document.querySelector('.card-body');
const button = document.querySelector('.btn');
card.hidden = true;

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

button.addEventListener('click', async (event) => {
  event.preventDefault()
  let city = document.querySelector('input').value.toLowerCase();
  // console.log(city);
  // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`);
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${your apiKey here}`);

  const data = await response.json();
  card.hidden = false;
  card.innerHTML =`Weather in ${data.name} is ${emojis[data.weather[0].icon]}, ${Math.round(data.main.temp -273.15)} degree`;
  // console.log(data)
})
  