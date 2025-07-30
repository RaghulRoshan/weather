Here’s a complete and professional `README.md` for your GitHub weather app repository. This is tailored to the uploaded files: `weather.html`, `styles.css`, and `script.js`.

---

# 🌦️ Weather App – Real-Time Forecast

A **clean and responsive weather application** built with **HTML**, **CSS**, and **JavaScript**, which fetches live weather data using the **OpenWeatherMap API**. The app allows users to search for any city and displays the current temperature, humidity, and wind speed, along with weather icons.

---

## 📸 Preview

> *(Insert screenshot here once hosted)*
> Example:


---

## 🔧 Features

✅ Search weather by city name
✅ Display:

* 🌡️ Temperature (°C)
* 💧 Humidity (%)
* 💨 Wind Speed (km/h)
  ✅ Dynamic weather icons based on condition
  ✅ Error message for invalid city input
  ✅ Fully responsive layout
  ✅ Clean UI with gradient background and rounded design

---

## 🚀 Live Demo

> *(If hosted, add your GitHub Pages or Netlify link here)*
> Example: [https://yourusername.github.io/weather-app/](https://yourusername.github.io/weather-app/)

---

## 🛠️ Built With

| Technology         | Purpose                 |
| ------------------ | ----------------------- |
| HTML5              | Page structure          |
| CSS3               | Styling and layout      |
| JavaScript         | API fetch and DOM logic |
| OpenWeatherMap API | Real-time weather data  |

---

## 📁 Folder Structure

```
📦 weather-app/
├── weather.html         # Main HTML file
├── styles.css           # App styling
├── script.js            # JavaScript logic
└── images/              # Weather icons (Clouds.png, Clear.png, etc.)
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Get your API Key**

   * Go to [https://openweathermap.org/api](https://openweathermap.org/api)
   * Create an account and generate your free API key

3. **Replace API Key** in `script.js`:

   ```js
   const apikey = "your_api_key_here";
   ```

4. **Run**
   Open `weather.html` in your browser. That’s it!

---

## 🗂️ Weather Icons Required

Ensure these icons are placed in the `images/` folder:

* `Clear.png`
* `Clouds.png`
* `Drizzle.png`
* `Mist.png`
* `Rain.png`
* `Snow.png`
* `Sunny.png`
* `humidity.png`
* `wind.png`
* `search.png`

---

## 🧠 Future Enhancements

* [ ] Add dark/light theme toggle
* [ ] Auto-detect user location
* [ ] Store previous searches using local storage
* [ ] Voice-based search

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

