const apiKey = "b03eb6d67f8d826ee1603f520d830023"; // Your API key
const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");

const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const condition = document.getElementById("condition");
const icon = document.getElementById("icon");
const localTime = document.getElementById("local-time");

const searchHistory = document.getElementById("search-history");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city !== "") {
    getWeather(city);
    saveToHistory(city);
  }
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then((data) => {
      cityName.textContent = `${data.name}, ${data.sys.country}`;
      temperature.textContent = data.main.temp;
      humidity.textContent = data.main.humidity;
      windSpeed.textContent = data.wind.speed;
      condition.textContent = data.weather[0].description;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      icon.alt = data.weather[0].description;

      const timezoneOffset = data.timezone; // in seconds
      const localDate = new Date(Date.now() + timezoneOffset * 1000);
      localTime.textContent = `Local Time: ${localDate.toUTCString().slice(17, 25)}`;

      weatherInfo.classList.remove("hidden");
    })
    .catch((err) => {
      alert("Error: " + err.message);
    });
}

function saveToHistory(city) {
  let cities = JSON.parse(localStorage.getItem("cities")) || [];
  if (!cities.includes(city)) {
    cities.unshift(city);
    if (cities.length > 5) cities.pop();
    localStorage.setItem("cities", JSON.stringify(cities));
  }
  renderHistory();
}

function renderHistory() {
  let cities = JSON.parse(localStorage.getItem("cities")) || [];
  searchHistory.innerHTML = "";

  cities.forEach((city) => {
    const li = document.createElement("li");
    li.textContent = city;
    li.addEventListener("click", () => {
      cityInput.value = city;
      getWeather(city);
    });
    searchHistory.appendChild(li);
  });
}

// Load previous history on startup
renderHistory();
