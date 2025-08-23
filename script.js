const date = document.getElementById("date");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const tempImg = document.getElementById("tempImg");
const description = document.getElementById("description");
const tempMax = document.getElementById("tempMax");
const tempMin = document.getElementById("tempMin");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "'June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();
date.innerHTML = `${month} ${day}, ${year}`;
const app = document.getElementById("app");
const getWeather = async () => {
  try {
    const cityName = document.getElementById("searchBarInput").value;
    const weatherDataFetch = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        cityName ? cityName : "Belgrade"
      }&appid=d4528262aeac1db4e8f1f3d7b2335a65&units=metric`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const weatherData = await weatherDataFetch.json();
  } catch (error) {
    console.log(error);
  }
};
getWeather();
