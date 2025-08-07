# 🌤️ Weather Dashboard – Real-Time Weather App

A clean and responsive **Weather Dashboard** built using **HTML, CSS, JavaScript**, and **OpenWeatherMap API**. This project displays real-time weather data for any searched city.

<img width="1046" height="872" alt="Screenshot 2025-08-07 151534" src="https://github.com/user-attachments/assets/2c6a85c0-2e48-4aea-9a8a-fbde08ac6b95" />

---

## 🧠 Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature, humidity, and wind speed
- 🌥️ Weather condition icons with descriptions
- 🕒 Local time display using timezone info
- 📌 Recent searches saved using Local Storage
- ✅ Error handling for invalid city names or API issues
- 📱 Responsive design for mobile and desktop

---

## 🚀 Tech Stack

| Tech            | Purpose                          |
|-----------------|----------------------------------|
| HTML5 / CSS3    | Structure and Styling            |
| JavaScript (ES6)| Logic and API handling           |
| OpenWeatherMap  | Weather data via REST API        |
| LocalStorage    | Store previous city searches     |
| Bootstrap/Tailwind (optional) | UI framework |

---

## 🛠️ How It Works

1. User enters a city name in the input box.
2. JavaScript sends a request to **OpenWeatherMap API** using `fetch()`.
3. API responds with weather data in **JSON**.
4. Data is parsed and displayed dynamically on the page.

---

## 📦 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/your-username/weather-dashboard.git

# Open the project
cd weather-dashboard

# Open index.html in your browser
