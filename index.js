// require('dotenv').config();


const card = document.querySelector('.card-body');
const button = document.querySelector('.btn');
card.hidden = true;
button.addEventListener('click', async (event) => {
  event.preventDefault()
  let city = document.querySelector('input').value.toLowerCase();
  // console.log(city);
  // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`);
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${your_api_key_here}`);

  const data = await response.json();
  card.hidden = false;
  card.innerHTML =`Weather in ${data.name} is ${data.weather[0].main}, ${Math.round(data.main.temp -273.15)} degree`;
  // console.log(data)
})
  