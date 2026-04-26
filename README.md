# KnowWeather
🌤️ Premium Glassmorphism Weather App
A modern, highly responsive weather application built with HTML, CSS, and JavaScript. This project features an advanced glassmorphism UI, fluid CSS animations, and real-time weather data fetched seamlessly from WeatherAPI.

✨ Features
Advanced Glassmorphism UI: Features frosted glass effects using backdrop filters, multi-layered box shadows, and translucent borders.

Smart Location Routing: Users can type a simple city name (e.g., "Delhi") or be highly specific (e.g., "Delhi, India"), and the backend automatically routes to the most accurate location without requiring a multi-step search.

Dynamic Backgrounds: The application's animated gradient background automatically shifts its color palette based on the current weather conditions (Sunny, Rainy, Cloudy, etc.).

Fluid Animations: Includes smooth element transitions, an ever-floating weather icon, and interactive hover/click micro-interactions for a premium feel.

Responsive Grid Dashboard: Environmental details (Wind, Humidity, AQI) are displayed in a clean, evenly spaced CSS Grid layout.

Robust Error Handling: Alerts users to invalid city names with a sleek, animated shake effect and hidden-by-default error states.

🛠️ Tech Stack
HTML5: Semantic structure and layout.

CSS3: Advanced styling including CSS Variables, Grid, Keyframe Animations, and Structural Pseudo-classes.

JavaScript (ES6+): Asynchronous API fetching (async/await), DOM manipulation, and dynamic styling.

API: WeatherAPI for real-time global weather data and Air Quality Index (AQI).

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
A modern web browser (Chrome, Firefox, Safari, Edge).

A free API key from WeatherAPI.

Installation & Setup
Clone or Download the Repository:
Download the project files (index.html, style.css, and script.js) into a single folder on your computer.

Add Your API Key:
Open script.js in your preferred text editor (like VS Code, Sublime Text, or Notepad) and locate the apiKey variable at the very top. Replace the string with your own API key.

JavaScript
const apiKey = "YOUR_WEATHER_API_KEY_HERE";
Run the App:
Simply double-click the index.html file to open it in your default web browser. No local server is required!

📁 File Structure
Plaintext
├── index.html   # The main HTML document
├── style.css    # Advanced styling and animations
└── script.js    # API logic and dynamic DOM manipulation
💡 Usage
Open the application in your browser.

Click on the search bar and type in a city name.

Click the Search button (or press Enter if you modify the code to support it).

View the real-time temperature, condition, icon, wind speed, humidity, and Air Quality Index (AQI).

Watch the background adapt to the weather condition!

🙏 Acknowledgments
Weather data provided by WeatherAPI.

UI/UX inspiration drawn from modern iOS and Dribbble glassmorphism trends.
