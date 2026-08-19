# KnowWeather
<div align="center">
  
  # 🌤️ Premium Glassmorphism Weather App
  
  <p align="center">
    A modern, highly responsive weather application featuring an advanced glassmorphism UI, dynamic background animations, and real-time API integration.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/WeatherAPI-00f2fe?style=for-the-badge&logo=api&logoColor=white" alt="WeatherAPI" />
  </p>

  **[View Live Demo](#) • [Report a Bug](samaddersourasish2006@gmail.com) • [Request a Feature](#gmail.com)**
</div>

---

## 📸 Preview

> **Note to developer:** *Replace the image link below with a screenshot of your actual application running.*

Link -> https://know-weather-psi.vercel.app/
## ✨ Key Features

- **Advanced Glassmorphism UI:** Built with custom CSS variables, backdrop filters, and multi-layered inset box shadows for a premium frosted-glass aesthetic.
- **Smart Location Routing:** Users can type ambiguous city names (e.g., "Delhi") and the backend intelligently resolves to the highest-populated match, or they can specify exactly (e.g., "Paris, Texas").
- **Dynamic Theming:** The application's animated gradient background automatically shifts its color palette based on real-time weather conditions (Sunny, Rainy, Cloudy, etc.).
- **Fluid Micro-interactions:** Features smooth element transitions, an ever-floating 3D-shadowed weather icon, and interactive hover/active states.
- **Responsive Dashboard:** Environmental details (Wind, Humidity, AQI) are structured using a clean, evenly spaced CSS Grid layout.
- **Robust Error Handling:** Alerts users to invalid searches with a sleek, keyframe-animated shake effect.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Custom CSS Variables, CSS Grid, Flexbox, Keyframe Animations
- **Data Provider:** [WeatherAPI](https://www.weatherapi.com/) (Real-time global weather and Air Quality Index)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- A free API key from [WeatherAPI](https://www.weatherapi.com/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/glassmorphism-weather-app.git](https://github.com/your-username/glassmorphism-weather-app.git)
   ```

2. **Navigate to the project directory:**
   ```bash
   cd glassmorphism-weather-app
   ```

3. **Configure your API Key:**
   Open `script.js` in your preferred code editor and replace the placeholder string with your own API key.
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

4. **Run the application:**
   Simply open the `index.html` file in your web browser. No local server is required!

## 📁 File Structure

```text
📦 glassmorphism-weather-app
 ┣ 📜 index.html   # Semantic HTML structure
 ┣ 📜 style.css    # Advanced styling and animations
 ┣ 📜 script.js    # API logic and dynamic DOM manipulation
 ┗ 📜 README.md    # Project documentation
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is distributed under the MIT License. See the `LICENSE` file for more information.

## 🙏 Acknowledgments

- Weather data and icons provided by [WeatherAPI](https://www.weatherapi.com/).
- UI/UX inspiration drawn from modern iOS design guidelines and Dribbble glassmorphism trends.
```

---

### 💡 Pro-Tip for your GitHub Repository: Host it for free!

Since this project uses pure HTML/CSS/JS with no backend database, you can host it directly on GitHub for free using **GitHub Pages**. 

1. Go to your repository on GitHub.
2. Click on the **Settings** tab at the top.
3. On the left sidebar, click on **Pages**.
4. Under "Build and deployment", look for **Branch**. Change it from `None` to `main` (or `master`), and click **Save**.
5. Wait 1-2 minutes, refresh the page, and GitHub will provide you with a live URL (e.g., `https://yourusername.github.io/weather-app/`). You can then paste this link at the very top of your README!
