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
